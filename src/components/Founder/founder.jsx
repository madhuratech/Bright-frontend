import profile from "../../assets/profile/profile.JPEG"

const Founder = () => {
  return (
    <section className="bg-[#edf2f8] py-14 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-2 items-center">

          {/* Left Side */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[450px]">
              <img
                src={profile}
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
             Meet Our Founder,  
              <br />
              Mr. Abdul Nazar
            </h2>

            {/* Content */}
            <div className="space-y-4 md:space-y-5 text-gray-600 text-sm sm:text-base leading-relaxed max-w-[700px] mx-auto lg:ml-auto lg:mr-0">
              <p>
               Mr. Abdul Nazar's vision and engineering expertise have been the driving force behind. Bright Industries' success.
                His entrepreneurial journey began with a small enterprise manufacturing furniture for hotels and restaurants, 
                where he developed a deep understanding of the hospitality industry's operational needs.
              </p>

              <p>
                Recognizing the growing demand for reliable and customized commercial kitchen solutions, he founded Bright Industries in 2003.
                He identified a critical gap between standard equipment and the unique requirements of professional kitchens.
                This unwavering commitment to quality, durability, and precision has established Bright Industries as a trusted name in the industry.
              </p>

              <p>
                His expertise soon expanded into the hatchery sector, where Bright Industries became recognized for designing and fabricating complete hatchery solutions,
                including conveyor systems, packing machines, stainless steel doors, and other specialized equipment. The same engineering excellence and attention to detail
                that defined the company's success in commercial kitchens continue to set new standards across every industry it serves.
              </p>
              <p>
                Today, Mr. Nazar's hands-on approach, technical knowledge, and commitment to continuous improvement continue to guide Bright Industries.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founder;