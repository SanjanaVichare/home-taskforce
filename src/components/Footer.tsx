import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const services = [
    "Home Deep Cleaning",
    "Office Deep Cleaning",
    "Commercial Housekeeping",
    "Carpet Shampooing",
    "Sofa Cleaning",
    "Pest Control",
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Home Task Facility Management" className="h-16 w-auto mb-6 rounded-lg bg-white p-2" />
            <p className="text-primary-foreground/70 mb-6">
              Professional cleaning & facility management services in Mumbai.
              We create the perfect shine, every time.
            </p>
            <div className="space-y-3">
              <a href="tel:+919702720588" className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors">
                <Phone className="h-4 w-4" />
                +91 9702720588
              </a>
              <a href="mailto:hometaskforce5@gmail.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors">
                <Mail className="h-4 w-4" />
                hometaskforce5@gmail.com
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">Vileparle West, Mumbai</span>
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
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <p className="text-primary-foreground/70 mb-6">
              Ready to experience the Home Task Facility Management difference? Contact us today for a free quote.
            </p>
            <a
              href="https://wa.me/919702720588"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Home Task Facility Management. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60">
            GST: 27AAICH3551J1ZE | MSME Certified
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
