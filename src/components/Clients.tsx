import { useState } from "react";
import { Sparkles, ChevronDown, Award } from "lucide-react";

// Import logos
import dream11 from "@/assets/logos/dream11.png";
import icici from "@/assets/logos/icici.png";
import uti from "@/assets/logos/uti.png";
import tvs from "@/assets/logos/tvs.png";
import ck from "@/assets/logos/ck.png";
import th from "@/assets/logos/th.png";
import superfit from "@/assets/logos/superfit.png";
import frw from "@/assets/logos/frw.png";

// Main clients with images
const clients = [
  { name: "Dream11", image: dream11 },
  { name: "ICICI Lombard", image: icici },
  { name: "UTI Mutual Fund", image: uti },
  { name: "TVS", image: tvs },
  { name: "Calvin Klein", image: ck },
  { name: "Tommy Hilfiger", image: th },
  { name: "Superfit", image: superfit },
  { name: "Freightwalla", image: frw },
];

// More clients (text only)
const moreClients = [
  "Transcon",
  "Vasant Oasis",
  "Silver Cloud Studios",
  "Ayurvedam",
  "Vasant Builders",
  "Other Corporate Clients",
];

const Clients = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="clients"
      className="section-padding bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-50 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>

      <div className="section-container relative">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-bold text-emerald-700 uppercase tracking-wider">
              Our Clients
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>

          <p className="text-lg text-slate-600">
            Companies, brands and celebrities that trust our professional services.
          </p>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group relative flex items-center justify-center rounded-2xl bg-white border border-slate-200 h-36 px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-emerald-300 hover:-translate-y-2 overflow-hidden"
              style={{
                animation: "fadeInUp 0.6s ease-out backwards",
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-emerald-50/0 group-hover:from-emerald-50 group-hover:to-transparent transition-all duration-500"></div>

              <img
                src={client.image}
                alt={client.name}
                className="relative z-10 max-h-full max-w-full object-contain transition-all duration-300 group-hover:scale-110"
                loading="lazy"
              />

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Show More */}
        <div className="text-center">

          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-xl hover:scale-105"
            >
              Show More Clients
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          )}

          {showMore && (
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

              {moreClients.map((name, index) => (
                <div
                  key={index}
                  className="group relative p-6 border border-slate-200 rounded-2xl bg-white text-center hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                    <Sparkles className="w-5 h-5 text-emerald-600" />
                  </div>

                  <p className="text-sm font-semibold text-slate-700 group-hover:text-emerald-700">
                    {name}
                  </p>
                </div>
              ))}

            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Clients;
