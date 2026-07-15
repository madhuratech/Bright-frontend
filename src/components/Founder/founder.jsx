const Founder = () => {
  return (
    <section className="bg-[#edf2f8] py-14 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Side */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[450px]">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                alt="Founder"
                className="w-full h-[400px] sm:h-[500px] lg:h-[550px] object-cover rounded-tl-[30px] sm:rounded-tl-[50px] rounded-br-[30px] sm:rounded-br-[50px] shadow-lg"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="text-center lg:text-right">
            {/* Badge */}
            <div className="inline-block px-4 sm:px-5 py-2 bg-[#dfe8f5] text-[#2f5fb8] text-xs sm:text-sm rounded-full mb-5 sm:mb-6 uppercase tracking-wide">
              Our Founder
            </div>

            {/* Heading */}
            <h2 className="text-[#0A59BE] text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-6 md:mb-8">
              Vision Behind The
              <br />
              Foundation
            </h2>

            {/* Content */}
            <div className="space-y-4 md:space-y-5 text-gray-600 text-sm sm:text-base leading-relaxed max-w-[700px] mx-auto lg:ml-auto lg:mr-0">
              <p>
                Bright Industries was founded with a vision to deliver reliable
                stainless steel and industrial solutions built on quality,
                precision, and long-term performance. From the beginning, the
                focus has been on creating dependable products that meet modern
                commercial and operational requirements.
              </p>

              <p>
                With a strong commitment to craftsmanship and customer
                satisfaction, the company has steadily grown by serving hotels,
                hospitals, institutions, catering facilities, and industrial
                sectors with durable and efficient manufacturing solutions.
              </p>

              <p>
                Under the founder's leadership, Bright Industries continues to
                move forward with a focus on innovation, consistent quality, and
                trusted industry relationships while maintaining high standards
                in every stage of fabrication and production.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founder;