import slide6 from "../../assets/hero/slide6.png";
import { useNavigate } from "react-router-dom";

const ConsultantHero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${slide6})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3b3b3be6] via-[#00000099] to-[#00000033]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16 pt-24 lg:pt-0">
        <div className="max-w-xl lg:max-w-2xl">
          
          {/* Heading */}
          <h1 className="text-white font-extrabold leading-[0.9] tracking-tight text-[48px] sm:text-[72px] md:text-[100px] lg:text-[140px]">
            Profile
          </h1>

          {/* Description */}
          <p className="mt-4 sm:mt-6 max-w-md text-white text-sm sm:text-base md:text-lg leading-relaxed">
            Delivering trusted commercial kitchen and fabrication solutions through quality, innovation, expertise, and reliability
          </p>

          {/* Button */}
          <button className="mt-6 sm:mt-8 bg-[#0b57d0] text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-300"
          onClick={()=>navigate("/contact")}>
            Get Consultation
          </button>

        </div>
      </div>
    </section>
  );
};

export default ConsultantHero;