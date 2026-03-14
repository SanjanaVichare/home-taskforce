import { useState } from "react";
import { Menu, X, Phone, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ComplianceNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [secretClicks, setSecretClicks] = useState(0);

    // ✅ ONLY SECTION IDs (same page scrolling)
    const navItems = [
        { name: "Overview", id: "#top" },
        { name: "Services", id: "#compliance-services" },
        { name: "Contact", id: "#compliance-contact" },
    ];

    // ✅ Smooth scroll function
    const handleScroll = (id: string) => {
        const element = document.querySelector(id);
        if (!element) return;

        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        setIsOpen(false);
    };

    // 🔐 Secret Admin Access (click logo 5 times)
    const handleSecretClick = () => {
        setSecretClicks((prev) => {
            const next = prev + 1;
            if (next === 5) {
                window.location.href = "/admin";
                return 0;
            }
            return next;
        });
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
            <div className="section-container">
                <div className="flex items-center justify-between h-16 md:h-20">

                    {/* ================= LOGO ================= */}
                    <div
                        onClick={handleSecretClick}
                        className="flex items-center gap-3 group cursor-pointer select-none"
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition">
                            <ShieldCheck className="w-5 h-5 text-white" />
                        </div>

                        <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                            Home Task Facility Management
                        </span>
                    </div>

                    {/* ================= DESKTOP NAV ================= */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => handleScroll(item.id)}
                                className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition relative group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all"></span>
                            </button>
                        ))}
                    </nav>

                    {/* ================= DESKTOP CTA ================= */}
                    <div className="hidden md:flex items-center gap-3">

                        <a
                            href="tel:+919702720588"
                            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-emerald-600 transition"
                        >
                            <div className="w-9 h-9 bg-emerald-100 rounded-full flex items-center justify-center">
                                <Phone className="w-4 h-4 text-emerald-600" />
                            </div>
                            <span className="hidden lg:inline">+91 9702720588</span>
                        </a>

                        <Button
                            onClick={() => handleScroll("#compliance-contact")}
                            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:scale-105 transition flex items-center gap-2"
                        >
                            Get Compliance Quote
                            <ArrowRight className="w-4 h-4" />
                        </Button>

                    </div>

                    {/* ================= MOBILE MENU BUTTON ================= */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>

                </div>

                {/* ================= MOBILE NAV ================= */}
                {isOpen && (
                    <nav className="md:hidden py-4 border-t bg-white rounded-b-2xl shadow-lg">

                        <div className="space-y-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => handleScroll(item.id)}
                                    className="block w-full text-left py-3 px-4 font-semibold text-slate-600 hover:bg-emerald-50 rounded-lg"
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>

                        <div className="pt-4 mt-4 border-t space-y-3">

                            <a
                                href="tel:+919702720588"
                                className="flex items-center gap-3 px-4 py-2 hover:bg-emerald-50 rounded-lg"
                            >
                                <Phone className="w-5 h-5 text-emerald-600" />
                                +91 9702720588
                            </a>

                            <Button
                                onClick={() => handleScroll("#compliance-contact")}
                                className="w-full flex items-center justify-center gap-2"
                            >
                                Get Compliance Quote
                                <ArrowRight className="w-5 h-5" />
                            </Button>

                        </div>

                    </nav>
                )}
            </div>
        </header>
    );
};

export default ComplianceNavbar;
