from flask import Flask, send_from_directory, request, jsonify
from flask_cors import CORS
from flask import session
from models import db, Lead, CookieConsent, Visitor
import os


# ===============================
# CONFIG
# ===============================

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(BASE_DIR)

app = Flask(
    __name__,
    static_folder=os.path.join(PROJECT_ROOT, "dist"),
    static_url_path=""
)
app.secret_key = "super-secret"

CORS(app)


# ===============================
# DATABASE
# ===============================

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

with app.app_context():
    db.create_all()


# ===============================
# TEST API
# ===============================

@app.route("/api/test")
def test():
    return {"status": "Backend working"}


# ===============================
# LEADS
# ===============================

@app.route("/api/leads", methods=["POST"])
def add_lead():

    data = request.json

    lead = Lead(
        name=data["name"],
        phone=data["phone"],
        email=data.get("email", ""),
        message=data.get("message", ""),
        source=data.get("source", "contact_form"),
    )

    db.session.add(lead)
    db.session.commit()

    return jsonify({"status": "saved"})


# ===============================
# ADMIN AUTH
# ===============================

ADMIN_USERNAME = "admin"
ADMIN_PASSWORD = "12345"   # ⚠️ CHANGE IN PRODUCTION

@app.route("/api/admin/logout", methods=["POST"])
def admin_logout():
    session.clear()
    return jsonify({"status": "logged out"})

@app.route("/api/admin/login", methods=["POST"])
def admin_login():

    data = request.json

    if (
        data.get("username") == ADMIN_USERNAME
        and data.get("password") == ADMIN_PASSWORD
    ):
        session["admin_logged_in"] = True
        return jsonify({"status": "success"})

    return jsonify({"status": "fail"}), 401

# ===============================
# GET LEADS (ADMIN)
# ===============================

@app.route("/api/admin/leads")
def admin_leads():
    if not session.get("admin_logged_in"):
        return jsonify({"error": "Unauthorized"}), 401
    
    leads = Lead.query.order_by(Lead.created_at.desc()).all()

    return jsonify([
        {
            "id": l.id,
            "name": l.name,
            "phone": l.phone,
            "email": l.email,
            "message": l.message,
            "source": l.source,
            "date": l.created_at.strftime("%d-%m-%Y %H:%M")
        }
        for l in leads
    ])


# ===============================
# VISITOR TRACKING
# ===============================

@app.route("/api/track", methods=["POST"])
def track_visitor():

    data = request.json

    visitor = Visitor(
        ip=request.remote_addr,
        city=data.get("city"),
        country=data.get("country"),
        user_agent=request.headers.get("User-Agent"),
        page=data.get("page"),
        referrer=data.get("referrer"),
    )

    db.session.add(visitor)
    db.session.commit()

    return {"status": "tracked"}


# ===============================
# COOKIE CONSENT
# ===============================

@app.route("/api/cookies/consent", methods=["POST"])
def save_cookie_consent():

    data = request.json

    consent = CookieConsent(
        ip=request.remote_addr,
        choice=data.get("choice"),
        analytics=data.get("analytics", False),
        marketing=data.get("marketing", False),
    )

    db.session.add(consent)
    db.session.commit()

    return jsonify({"status": "saved"})


# ===============================
# SERVE REACT (SPA ROUTER)
# ===============================

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_react(path):

    # Serve API normally
    if path.startswith("api/"):
        return jsonify({"error": "Not found"}), 404

    # If static file exists, serve it
    file_path = os.path.join(app.static_folder, path)
    if path != "" and os.path.exists(file_path):
        return send_from_directory(app.static_folder, path)

    # Otherwise ALWAYS return React index.html
    return send_from_directory(app.static_folder, "index.html")

# ===============================
# RUN SERVER
# ===============================

if __name__ == "__main__":

    print("🚀 Backend running...")
    print("🌐 Serving React from:", app.static_folder)

    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )
