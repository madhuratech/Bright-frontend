import { useEffect, useState } from "react";

// Slider Images
import slide1 from "../../assets/hero/slide1.png";
import slide2 from "../../assets/hero/slide2.png";
import slide3 from "../../assets/hero/slide3.png";
import slide4 from "../../assets/hero/slide4.png";
    

const slides = [slide1, slide2, slide3, slide4];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto Background Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full font-montserrat">
      <div className="relative w-full h-screen overflow-hidden">

        {/* Background Images */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            style={{
              backgroundImage: `url(${slide})`,
            }}
          />
        ))}

        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000e6] via-[#00000099] to-[#49494933]"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-20">
          <div className="inline-block w-fit bg-white/20 backdrop-blur-md text-white text-xs md:text-sm font-medium px-5 py-2 rounded-full uppercase tracking-wider mb-6 border border-white/20">
            Reliable Commercial Kitchen Experts
          </div>

          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-medium leading-tight max-w-4xl mb-6">
            Professional Kitchen Solutions
          </h1>

          <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
        As a trusted industrial kitchen equipment supplier and commercial kitchen equipment supplier,
        we design and deliver premium commercial kitchen systems, food preparation equipment, ventilation solutions, and
        workspace layouts for seamless operations. 
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#0b57d0] text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition duration-300">
              Book a Consultation
            </button>

            <button className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition duration-300">
              View Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;