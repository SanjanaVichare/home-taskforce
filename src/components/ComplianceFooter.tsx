import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpg";

const ComplianceFooter = () => {
    const services = [
        "Industrial Compliance Cleaning",
        "Factory Deep Sanitization",
        "Hospital Hygiene Compliance",
        "Corporate Audit Cleaning",
        "Government Facility Cleaning",
        "Warehouse Safety Cleaning",
    ];

    const quickLinks = [
        { name: "Overview", href: "#top" },
        { name: "Services", href: "#compliance-services" },
        { name: "Contact", href: "#compliance-contact" },
    ];

    return (
        <footer className="bg-slate-900 text-white">
            <div className="section-container py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Company Info */}
                    <div>
                        <img
                            src={logo}
                            alt="Home Task Facility Management"
                            className="h-16 w-auto mb-6 rounded-lg bg-white p-2"
                        />

                        <p className="text-slate-400 mb-6">
                            Government-approved compliance cleaning services.
                            Audit-ready, certified and fully documented hygiene solutions.
                        </p>

                        <div className="space-y-3 text-slate-300">

                            <a href="tel:+919702720588" className="flex items-center gap-3 hover:text-emerald-400 transition">
                                <Phone size={16} />
                                +91 9702720588
                            </a>

                            <a href="mailto:hometaskforce5@gmail.com" className="flex items-center gap-3 hover:text-emerald-400 transition">
                                <Mail size={16} />
                                hometaskforce5@gmail.com
                            </a>

                            <div className="flex items-start gap-3">
                                <MapPin size={16} className="mt-1" />
                                <span className="text-sm">
                                    Vileparle West, Mumbai
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-emerald-400 transition"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Compliance Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Compliance Services</h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <a
                                        href="#compliance-services"
                                        className="text-slate-400 hover:text-emerald-400 transition"
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Book Compliance Service</h3>

                        <p className="text-slate-400 mb-6">
                            Ready to experience the Home Task Facility Management difference? Contact us today for a free quote.
                        </p>

                        <a
                            href="https://wa.me/919702720588"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition"
                        >
                            <MessageCircle size={18} />
                            WhatsApp Us
                        </a>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-700">
                <div className="section-container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>
                        © {new Date().getFullYear()} Home Task Facility Management.
                        All rights reserved.
                    </p>
                    <p>
                        GST: 27AAICH3551J1ZE | MSME Certified
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default ComplianceFooter;
