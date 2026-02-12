import {
  Home,
  Building2,
  Users,
  Sparkles,
  Sofa,
  Droplets,
  Bug,
  Shield,
  Wrench,
  Zap,
  Paintbrush,
  Truck,
  User,
  Coffee,
  Hammer,
  ArrowRight,
} from "lucide-react";

/* SERVICES DATA */
const services = [
  {
    icon: Home,
    title: "Home Deep Cleaning",
    description: "Complete deep cleaning for your home",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Sparkles,
    title: "Carpet Shampooing",
    description: "Deep carpet cleaning & stain removal",
    img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Sofa,
    title: "Sofa & Chair Cleaning",
    description: "Professional upholstery cleaning",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: Building2,
    title: "Office Deep Cleaning",
    description: "Thorough office cleaning service",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    gradient: "from-slate-500 to-gray-600",
  },
  {
    icon: Users,
    title: "Society Housekeeping",
    description: "Housekeeping for residential societies",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    icon: User,
    title: "Office Boy Service",
    description: "Office helper & support staff",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    icon: Coffee,
    title: "Pantry Boy Service",
    description: "Pantry & refreshment staff",
    img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&q=80",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Bug,
    title: "Pest Control",
    description: "Complete pest control solutions",
    img: "https://images.unsplash.com/photo-1598514983004-6c2e9e6b1b34?w=800&q=80",
    gradient: "from-red-500 to-rose-600",
  },
  {
    icon: Shield,
    title: "Bird Netting",
    description: "Bird protection net installation",
    img: "https://images.unsplash.com/photo-1544986581-efac024faf62?w=800&q=80",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    icon: Droplets,
    title: "Water Tank Cleaning",
    description: "Hygienic tank cleaning & disinfection",
    img: "https://images.unsplash.com/photo-1581579185169-53b1f28cde8b?w=800&q=80",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Hammer,
    title: "Carpenter Services",
    description: "Furniture & wood repair services",
    img: "https://images.unsplash.com/photo-1581574205801-14d8ad62df7b?w=800&q=80",
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description: "Electrical repair & maintenance",
    img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&q=80",
    gradient: "from-yellow-500 to-amber-600",
  },
  {
    icon: Wrench,
    title: "Plumber Services",
    description: "Plumbing installation & repair",
    img: "https://images.unsplash.com/photo-1600585154780-9f5f0d09fa7b?w=800&q=80",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Paintbrush,
    title: "Painting Services",
    description: "Interior & exterior painting",
    img: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800&q=80",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Sparkles,
    title: "Marble Services",
    description: "Marble polishing & restoration",
    img: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
    gradient: "from-slate-500 to-zinc-600",
  },
  {
    icon: Truck,
    title: "Packers & Movers",
    description: "Safe packing & relocation",
    img: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&q=80",
    gradient: "from-emerald-500 to-green-600",
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>

      <div className="section-container relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-bold text-emerald-700 uppercase tracking-wider">
              Our Services
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Complete{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 bg-clip-text text-transparent">
              Facility Solutions
            </span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Professional cleaning, maintenance, and manpower services under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div
          id="services"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* SERVICE CARD */
const ServiceCard = ({ img, title, description, icon: Icon, gradient, index }) => {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white cursor-pointer hover:-translate-y-2 border border-slate-200 hover:border-emerald-300"
      style={{
        animation: 'fadeInUp 0.6s ease-out backwards',
        animationDelay: `${index * 0.05}s`
      }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent`}></div>
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        {/* Icon with gradient background */}
        <div className="mb-3">
          <div className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
        </div>

        <h3 className="text-white text-xl font-bold mb-2 group-hover:text-emerald-300 transition-colors">
          {title}
        </h3>

        <p className="text-white/90 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/*<button className="group/btn inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full w-fit transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105">
          Book Now
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>*/}
      </div>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
    </div>
  );
};

export default Services;