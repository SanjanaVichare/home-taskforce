from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()


class Lead(db.Model):
    __tablename__ = "leads"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(100))
    message = db.Column(db.Text)
    source = db.Column(db.String(50))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class CookieConsent(db.Model):

    __tablename__ = "cookie_consents"

    id = db.Column(db.Integer, primary_key=True)

    ip = db.Column(db.String(50))

    choice = db.Column(db.String(20))  # all / essential / custom

    analytics = db.Column(db.Boolean, default=False)
    marketing = db.Column(db.Boolean, default=False)

    created_at = db.Column(db.DateTime, default=db.func.now())

class Visitor(db.Model):

    __tablename__ = "visitors"

    id = db.Column(db.Integer, primary_key=True)

    ip = db.Column(db.String(50))
    city = db.Column(db.String(100))
    country = db.Column(db.String(50))

    user_agent = db.Column(db.Text)

    page = db.Column(db.String(200))
    referrer = db.Column(db.String(200))

    created_at = db.Column(db.DateTime, default=db.func.now())
