import { Sparkles, Award } from "lucide-react";

// Import logos
import dream11 from "@/assets/logos/d11.jpeg";
import icici from "@/assets/logos/icici.jpeg";
import uti from "@/assets/logos/uti.jpeg";
import tvs from "@/assets/logos/tvs.jpeg";
import ck from "@/assets/logos/ck.jpeg";
import th from "@/assets/logos/th.jpeg";
import superfit from "@/assets/logos/superfit.jpeg";
import frw from "@/assets/logos/frw.jpeg";
import agppl from "@/assets/logos/agppl.jpeg";
import ct from "@/assets/logos/ct.jpeg";
import gcell from "@/assets/logos/gcell.jpeg";
import hybec from "@/assets/logos/hybec.jpeg";
import kb from "@/assets/logos/kb.jpeg";
import oi from "@/assets/logos/oi.jpeg";
import vo from "@/assets/logos/vo.jpeg";
import tras from "@/assets/logos/tras.jpeg";

// Clients list
const clients = [
  { name: "Dream11", image: dream11 },
  { name: "ICICI Lombard", image: icici },
  { name: "UTI Mutual Fund", image: uti },
  { name: "TVS", image: tvs },
  { name: "Calvin Klein", image: ck },
  { name: "Tommy Hilfiger", image: th },
  { name: "Superfit", image: superfit },
  { name: "Freightwalla", image: frw },
  { name: "AGPPL", image: agppl },
  { name: "CT", image: ct },
  { name: "Gcell", image: gcell },
  { name: "Hybec", image: hybec },
  { name: "KB", image: kb },
  { name: "OI", image: oi },
  { name: "VO", image: vo },
  { name: "Transcon", image: tras },
];

// Duplicate for infinite loop
const marqueeClients = [...clients, ...clients];

const Clients = () => {
  return (
    <section
      id="clients"
      className="py-24 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

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
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>

          <p className="text-lg text-slate-600">
            Companies, brands and celebrities that trust our professional services.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">

          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent z-10" />

          {/* Track */}
          <div className="flex gap-10 marquee-track hover:[animation-play-state:paused]">

            {marqueeClients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[180px] h-28 bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="max-h-16 max-w-[140px] object-contain"
                  loading="lazy"
                />

              </div>
            ))}

          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-slate-500 text-sm flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-500" />
          And many more corporate clients across India
        </div>

      </div>
    </section>
  );
};

export default Clients;
