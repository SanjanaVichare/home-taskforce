import { Users, Leaf, Settings, Star, IndianRupee, CheckCircle, Sparkles } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Trained Staff",
    description: "Our team is professionally trained to deliver exceptional cleaning results with attention to detail.",
    gradient: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "We use only eco-friendly, non-toxic chemicals that are safe for your family and the environment.",
    gradient: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Settings,
    title: "Modern Equipment",
    description: "State-of-the-art machinery and equipment ensure superior cleaning quality and efficiency.",
    gradient: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Star,
    title: "Premium Clients",
    description: "Trusted by leading brands like Dream11, ICICI Lombard, Calvin Klein, and celebrity clients.",
    gradient: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Premium quality services at competitive prices with transparent, no-hidden-cost billing.",
    gradient: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: CheckCircle,
    title: "100% Satisfaction",
    description: "We guarantee your satisfaction with every service. Not happy? We'll make it right.",
    gradient: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>

      <div className="section-container relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-bold text-emerald-700 uppercase tracking-wider">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            The Home Task Facility Management{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 bg-clip-text text-transparent">
              Difference
            </span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            We don't just clean – we transform spaces with professionalism,
            care, and commitment to excellence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 pt-20 rounded-2xl bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-emerald-300 hover:-translate-y-2 text-center overflow-hidden"
              style={{
                animation: 'fadeInUp 0.6s ease-out backwards',
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Floating icon */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-7 w-7 text-white" strokeWidth={2.5} />
                </div>
              </div>


              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;