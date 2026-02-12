import { useEffect, useState } from "react";
import { Phone, MessageCircle, Mail, X } from "lucide-react";

export default function EngagementPopup() {

    const [visible, setVisible] = useState(false);

    useEffect(() => {

        // Check if already shown
        const shown = localStorage.getItem("engagement_popup");

        if (shown) return;

        // Show after 45 seconds
        const timer = setTimeout(() => {
            setVisible(true);
            localStorage.setItem("engagement_popup", "true");
        }, 45000); // 45 sec

        return () => clearTimeout(timer);

    }, []);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">

            <div className="bg-white rounded-xl p-6 max-w-md w-full relative">

                {/* Close */}
                <button
                    onClick={() => setVisible(false)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black"
                >
                    <X size={20} />
                </button>

                {/* Content */}
                <h2 className="text-2xl font-bold mb-2 text-center">
                    Need Help?
                </h2>

                <p className="text-gray-600 text-center mb-6">
                    Our team is ready to assist you. Contact us now!
                </p>

                <div className="space-y-3">

                    {/* Call */}
                    <a
                        href="tel:+919702720588"
                        className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
                    >
                        <Phone size={18} />
                        Call Now
                    </a>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/919702720588"
                        target="_blank"
                        className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
                    >
                        <MessageCircle size={18} />
                        WhatsApp
                    </a>

                    {/* Contact Form */}
                    <a
                        href="#contact"
                        onClick={() => setVisible(false)}
                        className="flex items-center justify-center gap-2 w-full border border-gray-300 py-3 rounded hover:bg-gray-100"
                    >
                        <Mail size={18} />
                        Contact Form
                    </a>

                </div>

            </div>
        </div>
    );
}
