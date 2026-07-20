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
    }, 5000); // Increased for better UX

    return () => clearInterval(interval);
  }, []);

  // Preload the remaining images
  useEffect(() => {
    slides.slice(1).forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  return (
    <section className="w-full h-screen overflow-hidden font-montserrat">
      <div className="relative w-full h-full">

        {/* Current Background Image Only */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${slides[currentSlide]})`,
          }}
        />

        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000e6] via-[#00000099] to-[#49494933]" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl">

            {/* Badge */}
            {/* <div className="inline-block w-fit rounded-full border border-white/20 bg-white/20 px-5 py-2 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-md md:text-sm">
              Reliable Commercial Kitchen Experts
            </div> */}

            {/* Heading */}
            <h1 className="mt-10 text-4xl font-medium leading-tight text-white md:text-6xl lg:text-7xl">
              Professional Kitchen Solutions
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
              As a trusted industrial kitchen equipment supplier and
              commercial kitchen equipment supplier, we design and deliver
              premium commercial kitchen systems, food preparation equipment,
              ventilation solutions, and workspace layouts for seamless
              operations.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <button className="rounded-full bg-[#0b57d0] px-8 py-3 font-medium text-white transition duration-300 hover:bg-blue-700">
                Book a Consultation
              </button>

              <button className="rounded-full border border-white px-8 py-3 font-medium text-white transition duration-300 hover:bg-white hover:text-black">
                View Products
              </button>

            </div>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-10 bg-white"
                  : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;