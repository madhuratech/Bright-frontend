import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import statsBg from "../../assets/stats/stats.png";

const AnimatedCounter = ({ end, suffix = "", isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, isVisible]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const statsData = [
    {
      value: 20,
      suffix: "+",
      line1: "YEARS OF",
      line2: "EXCELLENCE",
    },
    {
      value: 500,
      suffix: "+",
      line1: "PROJECTS",
      line2: "COMPLETED",
    },
    {
      value: 200,
      suffix: "+",
      line1: "CORPORATE CLIENTS",
      line2: "SERVED",
    },
    {
      value: 1000,
      suffix: "+",
      line1: "PRODUCTS",
      line2: "DELIVERED",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="w-full bg-[#E3E5EA] py-16 lg:py-24 px-4 sm:px-8 lg:px-12">
      {/* Heading */}
      <div className="max-w-[1500px] mx-auto text-center mb-10 lg:mb-14">
        <span
          className="
            inline-flex items-center
            px-5 py-2
            rounded-full
            bg-white
            text-[#0B4DB8]
            text-xs
            font-semibold
            uppercase
            tracking-[2px]
            shadow-sm
          "
        >
          Built on Experience
        </span>

        <h2
          className="
            mt-5
            text-3xl md:text-4xl lg:text-5xl
            font-bold
            text-[#111827]
            leading-tight
          "
        >
          Delivering Quality Through Expertise
        </h2>

        <p
          className="
            mt-4
            max-w-3xl
            mx-auto
            text-sm md:text-base
            text-gray-600
            leading-relaxed
          "
        >
        Backed by 20+ years of expertise, we are a leading industrial kitchen equipment
        supplier and commercial kitchen equipment supplier, delivering innovative engineering
        solutions and executing complex industrial projects with precision, quality, and unwavering commitment to client success
        </p>
      </div>

      {/* Stats Card */}
      <div
        ref={ref}
        className="
          relative
          overflow-hidden
          rounded-[32px]
          max-w-[1500px]
          mx-auto
          bg-cover
          bg-center
          bg-no-repeat
          px-6 sm:px-10 lg:px-16
          py-10 sm:py-12 lg:py-14
        "
        style={{
          backgroundImage: `url(${statsBg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Stats */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0">
          {statsData.map((item, index) => (
            <div
              key={index}
              className="
                relative
                flex
                flex-col
                items-center
                text-center
                px-3 lg:px-6
              "
            >
              {/* Divider */}
              {index !== statsData.length - 1 && (
                <div
                  className="
                    hidden md:block
                    absolute
                    right-0
                    top-1/2
                    -translate-y-1/2
                    h-[80px]
                    w-px
                    bg-white/30
                  "
                />
              )}

              {/* Animated Number */}
              <h2
                className="
                  text-[38px]
                  sm:text-[46px]
                  md:text-[56px]
                  lg:text-[64px]
                  xl:text-[72px]
                  font-extrabold
                  leading-none
                  text-white
                "
              >
                <AnimatedCounter
                  end={item.value}
                  suffix={item.suffix}
                  isVisible={inView}
                />
              </h2>

              {/* Label */}
              <div
                className="
                  mt-3
                  flex flex-col
                  gap-1
                  text-[10px]
                  sm:text-[11px]
                  lg:text-xs
                  font-medium
                  uppercase
                  tracking-[1.2px]
                  leading-relaxed
                  text-white/95
                "
              >
                <p>{item.line1}</p>
                <p>{item.line2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;