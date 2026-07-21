import Industry from "../../assets/about/Industry.png"


const Overview = () => {
  return (
    <section className="bg-[#f0f4fa] py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-16">

          {/* Left Content */}
          <div className="max-w-[620px] mx-auto lg:mx-0 text-center lg:text-left">
            <span className="inline-block px-4 py-2 text-[10px] sm:text-xs font-semibold text-blue-700 bg-blue-100 rounded-full uppercase tracking-[2px]">
              Overview
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A59BE] leading-tight">
              Building Industrial
              <br className="hidden sm:block" />
              Solutions With
              <br className="hidden sm:block" />
              Precision & Reliability
            </h2>

            <p className="mt-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Bright Industries is a trusted manufacturer of commercial kitchen systems,
              stainless steel fabrication products, CNC products, and industrial utility solutions
              designed to meet modern operational demands.
              With a focus on durability, hygiene, precision engineering, and
              long-term performance, we deliver customized solutions for hotels,
              hospitals, institutions, catering facilities, and industrial
              environments.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">

            <div className="relative w-full max-w-[750px]">

              {/* Main Image */}
              <div className="overflow-hidden rounded-2xl lg:rounded-[32px] shadow-xl h-[280px] sm:h-[380px] md:h-[500px] lg:h-[620px]">
                <img
                  src={Industry}
                  alt="Industrial Solutions"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Overview;