import {
  BadgeDollarSign,
  Clock3,
  Shield,
  PenTool,
  Headset,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: <BadgeDollarSign size={42} strokeWidth={1.6} />,
    title: "Premium Quality",
    desc: "Durable commercial kitchen equipment designed for efficiency, reliability, long-term performance, and seamless daily operations.",
  },
  {
    icon: <Clock3 size={42} strokeWidth={1.6} />,
    title: "Custom Solutions",
    desc: "Tailored kitchen layouts and equipment solutions are created to match unique business operational requirements perfectly.",
  },
  {
    icon: <Sparkles size={42} strokeWidth={1.6} />,
    title: "Expert Team",
    desc: "Experienced professionals delivering innovative industrial kitchen solutions with precision, quality, and complete customer support.",
  },
  {
    icon: <Headset size={42} strokeWidth={1.6} />,
    title: "Complete Support",
    desc: "End-to-end assistance from planning and installation to maintenance for a smooth kitchen project execution.",
  },
  {
    icon: <PenTool size={42} strokeWidth={1.6} />,
    title: "Smart Designs",
    desc: "Efficient kitchen systems improve workflow, productivity, safety, and overall operational performance for modern businesses.",
  },
  {
    icon: <Shield size={42} strokeWidth={1.6} />,
    title: "Trusted Service",
    desc: "Committed to timely delivery, premium quality standards, and long-lasting customer satisfaction across every project.",
  },
];

export default function ExcellenceSection() {
  return (
    <section className="bg-[#f5f7fa] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          {/* Left */}
          <div>
            <span className="uppercase tracking-[5px] text-sm text-[#8a8a8a] font-medium">
              Why Choose Us
            </span>

            <h2 className="mt-5 text-4xl md:text-6xl font-semibold leading-tight text-[#0E5CC8]">
              Built for
              <span className="block text-[#0E5CC8] font-light">
                Performance & Trust
              </span>
            </h2>
          </div>

          {/* Right */}
          <div>
            <p className="text-lg md:text-xl text-[#666] leading-relaxed">
              Reliable industrial kitchen equipment supplier and commercial kitchen equipment
              supplier delivering durable, efficient, high-performance kitchen solutions with
              smart layouts and premium equipment for seamless operations, confidence, productivity,
              and long-term business success.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-10 border border-[#ececec] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#f4f4f4] flex items-center justify-center text-[#222] group-hover:bg-[#222] group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="mt-8 text-2xl font-semibold text-[#222]">
                {item.title}
              </h3>

              <p className="mt-4 text-[#6b6b6b] leading-relaxed text-[16px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}