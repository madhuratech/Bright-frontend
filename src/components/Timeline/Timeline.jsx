import time1 from "../../assets/timeline/time1.png"
import time2 from "../../assets/timeline/time2.png"
import time3 from "../../assets/timeline/time3.png"
import time4 from "../../assets/timeline/time4.png"
import time5 from "../../assets/timeline/time5.png"
import time6 from "../../assets/timeline/time6.png"

const timelineData = [
  {
    year: "2003",
    title: "Journey Starts",
    description:
      "Founded in a 500 sq. ft. workshop crafting SS furniture for restaurants, hotels & bakeries with a big vision from a small space.",
    image: time1,
  },
  {
    year: "2010",
    title: "Foundation Established",
    description:
      "Expanded into full-scale kitchen equipment manufacturing custom-built, precision-fabricated, never compromising on grade or material.",
    image: time2,
  },
  {
    year: "2015",
    title: "Top Commercial Kitchens",
    description:
      "Serving top commercial kitchens across India and globally hotels, cloud kitchens, hospitals & institutions with tailor-made solutions, delivered on time, every time.",
    image: time4,
  },
  {
    year: "2023",
    title: "ISO Certified",
    description:
      "Achieved ISO certification a formal recognition of our commitment to international quality standards and operational excellence.",
    image: time3,
  },
  {
    year: "2025",
    title: "Skilled Production Team",
    description:
      "Grew from a 500 sq. ft. workshop to a 15,000 sq. ft. state-of-the-art manufacturing facility, equipped with precision CNC machinery and a skilled production team.",
    image: time2,
  },
  {
    year: "2026",
    title: "Trusted Commercial Kitchen Solution",
    description:
      "Bright Industries stands as a fully trusted name for complete, turnkey commercial kitchen solutions custom-built, installed, and serviced end-to-end.",
    image: time6,
  }
];

const Timeline = () => {
  return (
    <section className="bg-[#f7f7f5] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <span className="uppercase tracking-[4px] text-sm text-[#8a8a8a] font-medium">
            Our Legacy
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight text-[#0E5CC8]">
            Building Commercial
            <span className="block text-[#0E5CC8] font-light">
              Kitchen Excellence
            </span>
          </h2>
        </div>

        {/* Timeline Cards */}
        <div className="relative border-l border-[#d8d8d8] ml-3 md:ml-6 space-y-14">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative pl-10 md:pl-14"
            >
              {/* Dot */}
              <div className="absolute -left-[11px] top-10 w-5 h-5 rounded-full bg-black border-[5px] border-[#f7f7f5]"></div>

              {/* Card */}
              <div className="group bg-white rounded-[28px] overflow-hidden border border-[#ececec] hover:shadow-2xl transition-all duration-500">
                <div className="grid lg:grid-cols-2 items-center">

                  {/* Image */}
                  <div className={`${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                    <div
                      className={`overflow-hidden h-full ${index % 2 === 0
                          ? "lg:rounded-l-[28px]"
                          : "lg:rounded-r-[28px]"
                        }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[260px] md:h-[390px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`p-8 md:p-12 ${index % 2 !== 0 ? "lg:order-1" : ""
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-5xl md:text-6xl font-bold text-[#767676] leading-none">
                        {item.year}
                      </span>

                    </div>

                    <h3 className="mt-6 text-2xl md:text-3xl font-semibold text-[#1f1f1f]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[#666] leading-relaxed text-[15px] md:text-[17px]">
                      {item.description}
                    </p>

                    <div className="mt-8 w-16 h-[2px] bg-black"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;