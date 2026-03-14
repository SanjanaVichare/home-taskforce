import { useState } from "react";
import { Menu, X, Phone, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [secretClicks, setSecretClicks] = useState(0); // 🔐 secret counter
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", href: "/non-compliance#home" },
    { name: "About", href: "/non-compliance#about" },
    { name: "Services", href: "/non-compliance#services" },
    { name: "Clients", href: "/non-compliance#clients" },
    { name: "Reviews", href: "/non-compliance#reviews" },
    { name: "Contact", href: "/non-compliance#contact" },
  ];

  // 🔐 Secret Admin Access
  const handleSecretClick = () => {
    setSecretClicks((prev) => {
      const next = prev + 1;

      if (next === 5) {
        navigate("/admin"); // Go to admin
        return 0; // Reset
      }

      return next;
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo (SECRET ADMIN ACCESS HERE) */}
          <div
            onClick={handleSecretClick}
            className="flex items-center gap-3 group cursor-pointer select-none"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all duration-300 group-hover:scale-105">
              <Sparkles className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>

            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Home Task Force
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors relative group"
              >
                {item.name}

                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">

            <a
              href="tel:+919702720588"
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors group"
            >
              <div className="w-9 h-9 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                <Phone className="w-4 h-4 text-emerald-600" />
              </div>

              <span className="hidden lg:inline">+91 9702720588</span>
            </a>

            <Button
              asChild
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105"
            >
              <a href="/home#contact" className="flex items-center gap-2">
                Get Free Quote
              </a>
            </Button>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-700 hover:text-emerald-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-slate-200/50 animate-fade-in bg-white/95 backdrop-blur-sm rounded-b-2xl shadow-lg">

            <div className="space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-base font-semibold text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200/50 space-y-3">

              <a
                href="tel:+919702720588"
                className="flex items-center gap-3 text-base font-semibold text-slate-700 hover:text-emerald-600 transition-colors px-4 py-2 hover:bg-emerald-50 rounded-lg group"
              >
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>

                <span>+91 9702720588</span>
              </a>

              <Button
                asChild
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-full py-6 text-base font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
              >
                <a
                  href="/home#contact"
                  className="flex items-center justify-center gap-2"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>

            </div>

          </nav>
        )}

      </div>
    </header>
  );
};

export default Header;
