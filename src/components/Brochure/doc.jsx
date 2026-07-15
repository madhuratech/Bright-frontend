import Brochure from "../../assets/Brochure/Brochure.png"

const BrochureSection = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-[#0F172A] rounded-[32px] overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center">
            
            {/* Content */}
            <div className="p-8 md:p-12 lg:p-16">
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                COMPANY PROFILE
              </span>

              <h2 className="mt-5 text-3xl md:text-5xl font-bold text-white leading-tight">
                Download Our
                <span className="block text-[#58A6FF]">
                  Corporate Brochure
                </span>
              </h2>

              <p className="mt-4 text-white/70 max-w-lg">
                Discover our complete range of commercial kitchen solutions, project highlights, manufacturing strength, and technical expertise.
              </p>

              <a
                href="/brochure.pdf"
                download
                className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-[#0057C9] text-white rounded-full font-medium hover:bg-[#0048B3] transition"
              >
                Download PDF
              </a>
            </div>

            {/* Image */}
            <div className="relative h-[300px] lg:h-full">
              <img
                src={Brochure}
                alt="Brochure"
                className="w-full h-full object-cover"
              />

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochureSection;