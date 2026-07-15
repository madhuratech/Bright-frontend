import slide3 from "../../assets/hero/slide3.png";

const ContactHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${slide3})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3b3b3be6] via-[#00000099] to-[#00000033]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 mt-20">
        <div className="max-w-2xl">
          <h1 className="text-white text-[70px] sm:text-[100px] md:text-[120px] lg:text-[140px] font-extrabold leading-none tracking-tight">
            Connect
          </h1>

          <p className="mt-4 max-w-md text-white text-sm sm:text-base leading-relaxed">
            Reach out for commercial kitchen installation, maintenance, servicing, and technical support solutions designed for reliable industrial performance.
          </p>

          <button className="mt-4 bg-[#0b57d0] text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;