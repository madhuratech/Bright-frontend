import { useState, useEffect } from "react";
import mision from "../../assets/Growth/mision.jpg"
import vision from "../../assets/Growth/vision.jpg"

const MISSION_IMG =mision;

const VISION_IMG =vision;

export default function VisionMission() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="w-full py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: "#edf2f8" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div
          className="text-center px-5 mb-12 md:mb-20"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <span className="inline-flex items-center border border-[#0A59BE] text-[#0A59BE] rounded-full px-5 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-5">
            Vision & Mission
          </span>

          <h1 className="text-[#0A59BE] text-4xl md:text-6xl font-medium leading-tight max-w-5xl mx-auto">
            Focused On Growth & Innovation
          </h1>
        </div>

        {/* Mission Card */}
        <div
          className="mb-8 md:mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-60px)",
            transition: "all 0.8s ease 0.2s",
          }}
        >
          <div
            className="
              mx-4
              md:mr-20 md:ml-0
              bg-[#0A59BE]
              rounded-[32px]
              md:rounded-r-[999px]
              overflow-hidden
              flex flex-col md:flex-row
              items-center
              p-6 md:p-0
              shadow-xl
            "
          >
            {/* Mobile Image Top / Desktop Right */}
            <div
              className="
                w-32 h-32
                md:w-[200px] md:h-[200px]
                rounded-full
                overflow-hidden
                border-[5px] border-blue-300
                flex-shrink-0
                mb-6 md:mb-0
                md:order-2
                md:mr-6
              "
            >
              <img
                src={MISSION_IMG}
                alt="Mission"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left md:pl-14 md:pr-6 py-2 md:py-10">
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                Mission
              </h2>

              <p className="text-blue-100 text-sm md:text-lg leading-relaxed max-w-3xl">
                To manufacture high-quality stainless steel and commercial
                kitchen solutions that deliver durability, operational
                efficiency, and long-term value for industrial and commercial
                environments.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(60px)",
            transition: "all 0.8s ease 0.4s",
          }}
        >
          <div
            className="
              mx-4
              md:ml-20 md:mr-0
              bg-[#0A59BE]
              rounded-[32px]
              md:rounded-l-[999px]
              overflow-hidden
              flex flex-col md:flex-row
              items-center
              p-6 md:p-0
              shadow-xl
            "
          >
            {/* Image */}
            <div
              className="
                w-32 h-32
                md:w-[200px] md:h-[200px]
                rounded-full
                overflow-hidden
                border-[5px] border-blue-300
                flex-shrink-0
                mb-6 md:mb-0
                md:ml-6
              "
            >
              <img
                src={VISION_IMG}
                alt="Vision"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left md:px-10 py-2 md:py-10">
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                Vision
              </h2>

              <p className="text-blue-100 text-sm md:text-lg leading-relaxed max-w-3xl">
                To become a trusted industry leader in stainless steel
                fabrication and industrial manufacturing by consistently
                delivering innovative, reliable, and performance-driven
                solutions.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}