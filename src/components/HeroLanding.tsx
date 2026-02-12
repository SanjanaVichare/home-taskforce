import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Sparkles, ArrowRight } from "lucide-react";

const HeroLanding = () => {
    const navigate = useNavigate();

    // 🔐 Secret Admin Counter
    const [secretClicks, setSecretClicks] = useState(0);

    // 🔐 Secret Handler
    const handleSecretClick = () => {
        setSecretClicks((prev) => {
            const next = prev + 1;

            if (next === 5) {
                navigate("/admin");
                return 0; // reset
            }

            return next;
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-50">
            {/* HEADER */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
                <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
                    {/* Logo (SECRET ADMIN ACCESS) */}
                    <div
                        onClick={handleSecretClick}
                        className="flex items-center gap-3 group cursor-pointer select-none"
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all duration-300 group-hover:scale-105">
                            <Sparkles className="w-5 h-5 text-white" strokeWidth={2.5} />
                        </div>

                        <span className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                            Home Task FM
                        </span>
                    </div>

                    {/* Nav Links - Hidden on mobile */}
                    <div className="hidden md:flex items-center gap-8">
                        <button
                            onClick={() => navigate("/services")}
                            className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors relative group"
                        >
                            Services
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
                        </button>
                        <button
                            onClick={() => navigate("/clients")}
                            className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors relative group"
                        >
                            Clients
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
                        </button>
                        <button
                            onClick={() => navigate("/contact")}
                            className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors relative group"
                        >
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
                        </button>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-3">
                        <a
                            href="tel:+919702720588"
                            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors group"
                        >
                            <div className="w-9 h-9 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                                <Phone className="w-4 h-4 text-emerald-600" />
                            </div>
                            <span className="hidden lg:inline">+91 9702720588</span>
                        </a>
                        <button
                            onClick={() => navigate("/contact")}
                            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105"
                        >
                            Get Free Quote
                        </button>
                    </div>
                </nav>
            </header>

            {/* HERO SECTION */}
            <div className="relative pt-24 pb-20 overflow-hidden">
                {/* HERO IMAGE with gradient overlay */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
                        alt="Professional cleaning service"
                        className="w-full h-full object-cover"
                    />
                    {/* Multi-layer gradient overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/85"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 to-transparent"></div>
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>

                {/* CONTENT */}
                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl pt-16 pb-24">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-[fadeInDown_0.6s_ease-out]">
                            <Sparkles className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm font-semibold text-white">Professional Cleaning</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
                            <span className="text-white">Custom Home</span>
                            <br />
                            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent">
                                Cleaning Services
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
                            Enjoy a spotless home with our trusted and eco-friendly professional cleaning services.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
                            <button
                                onClick={() => navigate("/home")}
                                className="group bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 rounded-full text-white hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 font-semibold shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 flex items-center justify-center gap-2"
                            >
                                Book Compliance Service
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => navigate("/non-compliance")}
                                className="group bg-white/95 backdrop-blur-sm px-8 py-4 rounded-full text-slate-800 hover:bg-white transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
                            >
                                Non-Compliance Service
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Decorative bottom curve */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                        <path d="M0,64 C360,120 1080,120 1440,64 L1440,120 L0,120 Z" fill="rgb(248, 250, 252)" />
                    </svg>
                </div>
            </div>

            {/* STATS SECTION */}
            <div className="relative -mt-16 pb-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        <StatCard number="500+" label="Happy Clients" delay="0s" />
                        <StatCard number="10K+" label="Cleanings Done" delay="0.1s" />
                        <StatCard number="100%" label="Satisfaction Rate" delay="0.2s" />
                    </div>
                </div>
            </div>
        </div>
    );
};

/* STAT CARD */
const StatCard = ({ number, label, delay = "0s" }) => {
    return (
        <div
            className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-emerald-200 hover:-translate-y-2 relative overflow-hidden"
            style={{ animationDelay: delay }}
        >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-emerald-50/0 group-hover:from-emerald-50 group-hover:to-transparent transition-all duration-500"></div>

            <div className="relative">
                {/* Decorative icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-6 h-6 text-emerald-600" />
                </div>

                <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-br from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2 group-hover:from-emerald-600 group-hover:to-emerald-700 transition-all duration-300">
                    {number}
                </h3>
                <p className="text-slate-600 font-semibold text-lg">
                    {label}
                </p>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>
    );
};

export default HeroLanding;