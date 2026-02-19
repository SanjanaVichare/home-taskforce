import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cleaning.jpg";

const Hero = () => {
  return (
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
              <a href="#contact">
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
  );
};

export default Hero;
