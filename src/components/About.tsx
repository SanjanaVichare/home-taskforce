import { Leaf, Settings, Shield, Award, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: "Trained Staff",
      description: "Our team is professionally trained to deliver exceptional cleaning results with attention to detail.",
      gradient: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Settings,
      title: "Modern Equipment",
      description: "State-of-the-art machinery for superior results",
      gradient: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Shield,
      title: "Certified",
      description: "GST & MSME certified for your peace of mind",
      gradient: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Committed to delivering excellence every time",
      gradient: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-bold text-emerald-700 uppercase tracking-wider">
                About Us
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Mumbai's Trusted Cleaning{" "}
              <span className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                Partner
              </span>
            </h2>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Home Task Facility Management is a professional platform in the cleaning industry
              servicing premium cleaning services to our customers at affordable prices.
            </p>

            <p className="text-base text-slate-600 mb-8 leading-relaxed">
              Founded in February 2022, this Mumbai-based company made a mark within its customer base
              with supreme quality work. We operate with state-of-the-art machinery & equipment,
              delivering quality work with personalized care. At Home Task Facility Management, we believe in making
              our customer's day healthy & fresh.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 relative overflow-hidden group">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-emerald-50/0 group-hover:from-emerald-50 group-hover:to-transparent transition-all duration-500"></div>

              <div className="text-center relative z-10">
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-emerald-600 to-emerald-700 bg-clip-text text-transparent mb-1">
                  2022
                </p>
                <p className="text-sm font-semibold text-slate-600">Founded</p>
              </div>

              <div className="text-center border-x border-slate-200 relative z-10">
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-emerald-600 to-emerald-700 bg-clip-text text-transparent mb-1">
                  100%
                </p>
                <p className="text-sm font-semibold text-slate-600">Satisfaction</p>
              </div>

              <div className="text-center relative z-10">
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-emerald-600 to-emerald-700 bg-clip-text text-transparent mb-1">
                  50+
                </p>
                <p className="text-sm font-semibold text-slate-600">Trained Staff</p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-6 order-1 lg:order-2">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-emerald-200 hover:-translate-y-2 relative overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out backwards'
                }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  {/* Icon with gradient */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-7 w-7 text-white" strokeWidth={2.5} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;