import {
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Send,
  MapPin,
  Mail,
  Home,
  Building2,
  Users,
  Sparkles,
  Sofa,
  Bug,
  Zap,
  Truck,
  CheckCircle2,
  Clock,
  Award,
  ThumbsUp,
  Star,
  ChevronRight,
  Wrench,
  Paintbrush,
  User,
  Coffee,
  Shield,
  Droplets,
  Hammer,
} from "lucide-react";
import ComplianceFooter from "@/components/ComplianceFooter";
import { Button } from "@/components/ui/button";
import ComplianceNavbar from "@/components/ComplianceNavbar";
import heroImage from "@/assets/hero-cleaning.jpg";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/* ================= SERVICES DATA ================= */

const services = [
  {
    icon: Home,
    title: "Home Deep Cleaning",
    description: "Complete deep cleaning for your home",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    gradient: "from-emerald-500 to-teal-600",
    stats: "Custom Quote",
  },
  {
    icon: Sparkles,
    title: "Carpet Shampooing",
    description: "Deep carpet cleaning & stain removal",
    img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80",
    gradient: "from-blue-500 to-cyan-600",
    stats: "Custom Quote",
  },
  {
    icon: Sofa,
    title: "Sofa & Chair Cleaning",
    description: "Professional upholstery cleaning",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    gradient: "from-purple-500 to-violet-600",
    stats: "Custom Quote",
  },
  {
    icon: Building2,
    title: "Office Deep Cleaning",
    description: "Thorough office cleaning service",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    gradient: "from-slate-500 to-gray-600",
    stats: "Custom Quote",
  },
  {
    icon: Users,
    title: "Society Housekeeping",
    description: "Housekeeping for residential societies",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    gradient: "from-indigo-500 to-blue-600",
    stats: "Custom Quote",
  },
  {
    icon: User,
    title: "Office Boy Service",
    description: "Office helper & support staff",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    gradient: "from-teal-500 to-emerald-600",
    stats: "Custom Quote",
  },
  {
    icon: Coffee,
    title: "Pantry Boy Service",
    description: "Pantry & refreshment staff",
    img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&q=80",
    gradient: "from-amber-500 to-orange-600",
    stats: "Custom Quote",
  },
  {
    icon: Bug,
    title: "Pest Control",
    description: "Complete pest control solutions",
    img: "https://images.unsplash.com/photo-1598514983004-6c2e9e6b1b34?w=800&q=80",
    gradient: "from-red-500 to-rose-600",
    stats: "Custom Quote",
  },
  {
    icon: Shield,
    title: "Bird Netting",
    description: "Bird protection net installation",
    img: "https://images.unsplash.com/photo-1544986581-efac024faf62?w=800&q=80",
    gradient: "from-sky-500 to-blue-600",
    stats: "Custom Quote",
  },
  {
    icon: Droplets,
    title: "Water Tank Cleaning",
    description: "Hygienic tank cleaning & disinfection",
    img: "https://images.unsplash.com/photo-1581579185169-53b1f28cde8b?w=800&q=80",
    gradient: "from-cyan-500 to-blue-600",
    stats: "Custom Quote",
  },
  {
    icon: Hammer,
    title: "Carpenter Services",
    description: "Furniture & wood repair services",
    img: "https://images.unsplash.com/photo-1581574205801-14d8ad62df7b?w=800&q=80",
    gradient: "from-orange-500 to-red-600",
    stats: "Custom Quote",
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description: "Electrical repair & maintenance",
    img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&q=80",
    gradient: "from-yellow-500 to-amber-600",
    stats: "Custom Quote",
  },
  {
    icon: Wrench,
    title: "Plumber Services",
    description: "Plumbing installation & repair",
    img: "https://images.unsplash.com/photo-1600585154780-9f5f0d09fa7b?w=800&q=80",
    gradient: "from-blue-500 to-indigo-600",
    stats: "Custom Quote",
  },
  {
    icon: Paintbrush,
    title: "Painting Services",
    description: "Interior & exterior painting",
    img: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800&q=80",
    gradient: "from-pink-500 to-rose-600",
    stats: "Custom Quote",
  },
  {
    icon: Sparkles,
    title: "Marble Services",
    description: "Marble polishing & restoration",
    img: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
    gradient: "from-slate-500 to-zinc-600",
    stats: "Custom Quote",
  },
  {
    icon: Truck,
    title: "Packers & Movers",
    description: "Safe packing & relocation",
    img: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&q=80",
    gradient: "from-emerald-500 to-green-600",
    stats: "Custom Quote",
  },
];

const benefits = [
  { icon: ShieldCheck, text: "Govt. Approved & Certified", color: "text-emerald-600" },
  { icon: CheckCircle2, text: "Insured & Bonded Staff", color: "text-blue-600" },
  { icon: Clock, text: "24/7 Emergency Service", color: "text-purple-600" },
  { icon: Award, text: "5+ Years Experience", color: "text-amber-600" },
  { icon: ThumbsUp, text: "100% Satisfaction", color: "text-green-600" },
  { icon: Star, text: "Premium Quality Products", color: "text-rose-600" },
];

const Compliance = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    service: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(window.location.origin + "/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          service: formData.service,
          source: "compliance_contact",
        }),
      });

      if (!response.ok) throw new Error();

      const message = `🏠 *New Service Inquiry*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Service:* ${formData.service}\n\n*Message:* ${formData.message}`;

      window.open(
        `https://wa.me/919702720588?text=${encodeURIComponent(message)}`,
        "_blank"
      );

      toast.success("Inquiry sent successfully! We'll contact you within 30 minutes.", {
        duration: 5000,
      });

      setFormData({ name: "", phone: "", email: "", message: "", service: "" });
    } catch {
      toast.error("Could not send inquiry. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="top" className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <ComplianceNavbar />

      {/* ================= HERO SECTION ================= */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Professional Cleaning Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground border border-secondary/30 mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground/90">GST & MSME Certified Company</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up animation-delay-100">
              Professional Cleaning & Facility Management Services in{" "}
              <span className="text-secondary">Mumbai</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium mb-4 animate-fade-in-up animation-delay-200">
              "We Create The Perfect Shine, Every Time"
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-primary-foreground/70 mb-8 max-w-2xl animate-fade-in-up animation-delay-300">
              Premium quality cleaning services using eco-friendly chemicals and modern machinery.
              Trusted by Dream11, ICICI Lombard, Tommy Hilfiger, and celebrity clients.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <Button size="lg" className="group" asChild>
                <a href="#compliance-contact">
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20" asChild>
                <a href="tel:+919702720588">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="https://wa.me/919702720588" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 mt-12 animate-fade-in-up animation-delay-500">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-secondary">3+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">Years</p>
                  <p className="text-xs text-primary-foreground/60">Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-secondary">500+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">Happy</p>
                  <p className="text-xs text-primary-foreground/60">Clients</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-secondary">14+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">Services</p>
                  <p className="text-xs text-primary-foreground/60">Offered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS SECTION ================= */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className={`${benefit.color} mb-3 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <benefit.icon className="h-8 w-8" />
                </div>
                <p className="text-sm font-medium text-gray-700">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section
        id="compliance-services"
        className="py-20 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-50 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,transparent,black)]" />

        <div className="section-container relative">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Premium{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Services
              </span>
            </h2>
            <p className="text-gray-600">
              Choose from our wide range of professional cleaning and maintenance services
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section id="compliance-contact" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        <div className="section-container relative">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-emerald-600 mb-4 uppercase tracking-wider">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-heading">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Touch
              </span>
            </h2>
            <p className="text-lg text-slate-600">
              Have questions? We're here to help 24/7. Reach out to us anytime.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Call Us</h3>
                    <a href="tel:+919702720588" className="block text-emerald-600 hover:text-emerald-700 hover:underline transition">
                      +91 9702720588
                    </a>
                    <a href="tel:+919137453107" className="block text-emerald-600 hover:text-emerald-700 hover:underline transition">
                      +91 9137453107
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Email Us</h3>
                    <a href="mailto:hometaskforce5@gmail.com" className="text-emerald-600 hover:text-emerald-700 hover:underline transition">
                      hometaskforce5@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Our Office</h3>
                    <p className="text-muted-foreground">
                      Room No 11, Jay Ambe Mata No 6,<br />
                      Nehru Nagar, V.M. Road,<br />
                      Vileparle West, Mumbai - 400056
                    </p>
                    <a
                      href="https://maps.google.com/?q=Vileparle+West+Mumbai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-sm text-emerald-600 hover:text-emerald-700 hover:underline transition"
                    >
                      Get directions →
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                  <Clock className="h-5 w-5 text-emerald-600 mr-2" />
                  Business Hours
                </h3>
                <div className="space-y-2 text-slate-600">
                  <div className="flex justify-between">
                    <span>Monday - Saturday:</span>
                    <span className="font-medium">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-emerald-600 font-medium">
                    <span>Emergency:</span>
                    <span>24/7 Available</span>
                  </div>
                </div>
              </div>

              {/* GST Registered */}
              <div className="p-6 rounded-2xl bg-emerald-500 text-white shadow-md">
                <h3 className="text-lg font-semibold mb-2">GST Registered</h3>
                <p className="opacity-90">GST NO: 27AAICH3551J1ZE</p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Get Free Quote</h3>

                <div>
                  <Input
                    placeholder="Your Name *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                    className="flex h-12 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-normal text-slate-900 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:border-emerald-500 disabled:cursor-not-allowed disabled:opacity-50 hover:border-slate-300 transition"
                  >
                    <option value="">Select Service *</option>
                    <option value="Home Deep Cleaning">Home Deep Cleaning</option>
                    <option value="Carpet Shampooing">Carpet Shampooing</option>
                    <option value="Sofa & Chair Cleaning">Sofa & Chair Cleaning</option>
                    <option value="Office Deep Cleaning">Office Deep Cleaning</option>
                    <option value="Society Housekeeping">Society Housekeeping</option>
                    <option value="Office Boy Service">Office Boy Service</option>
                    <option value="Pantry Boy Service">Pantry Boy Service</option>
                    <option value="Pest Control">Pest Control</option>
                    <option value="Bird Netting">Bird Netting</option>
                    <option value="Gardner Services">Gardner Services</option>
                    <option value="Carpenter Services">Carpenter Services</option>
                    <option value="Electrical Services">Electrical Services</option>
                    <option value="Plumber Services">Plumber Services</option>
                    <option value="Driver Services">Driver Services</option>
                    <option value="Painting Services">Painting Services</option>
                    <option value="Marble Services">Marble Services</option>
                    <option value="Water Tank Cleaning">Water Tank Cleaning</option>
                    <option value="Commercial Housekeeping">Commercial Housekeeping</option>
                  </select>
                </div>

                <div>
                  <Textarea
                    rows={4}
                    required
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Inquiry via WhatsApp
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-gray-500 mt-4">
                  By submitting, you agree to our Terms and Privacy Policy.
                  We'll respond within 30 minutes.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ComplianceFooter />
    </div>
  );
};


/* ================= ENHANCED COMPONENTS ================= */

const ServiceCard = ({ img, title, description, icon: Icon, gradient, stats, index }: any) => {
  const handleClick = () => {
    const msg = `Hi, I'm interested in your ${title} service. Can you provide more details?`;
    window.open(`https://wa.me/919702720588?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div
      onClick={handleClick}
      className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-60 mix-blend-overlay`} />
      </div>

      {/* Content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-6 flex flex-col justify-end">
        <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center mb-3 border border-white/20 group-hover:bg-white/20 transition-colors">
            <Icon className="h-6 w-6 text-white" />
          </div>

          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-sm text-gray-200 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {description}
          </p>

          <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-xs text-emerald-300 bg-black/30 px-2 py-1 rounded-full">
              {stats}
            </span>
            <ArrowRight className="h-4 w-4 text-white transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

    </div>

  );
};

export default Compliance;