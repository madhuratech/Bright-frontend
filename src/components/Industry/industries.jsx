import { motion } from "framer-motion";
import Hotels from "../../assets/Industry/Hotels.png"
import Industrial from "../../assets/Industry/Industrial.png"
import Hospitals from "../../assets/Industry/Hospitals.png"
import Catering from "../../assets/Industry/Catering.png"

const industries = [
  {
    title: "HOTELS & RESTAURANTS",
    description:
      "Efficient kitchen infrastructure solutions designed to support seamless operations, consistent service quality, and enhanced productivity for hospitality businesses.",
    bg: Hotels,
  },
  {
    title: "INDUSTRIAL CANTEENS",
    description:
      "Robust commercial kitchen systems engineered for high-capacity food preparation, streamlined workflows, and dependable day-to-day performance by a leading commercial kitchen equipment supplier.",
    bg:Industrial,
  },
  {
    title: "HOSPITALS",
    description:
      "Specialized kitchen solutions developed to maintain hygiene, ensure regulatory compliance, and support safe food preparation environments.",
    bg: Hospitals,
  },
  {
    title: "CATERING SERVICES",
    description:
      "Customized kitchen setups built for flexibility, speed, and reliability, helping catering businesses manage diverse operational requirements.",
    bg:Catering,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const IndustriesSection = () => {
  return (
    <section className="bg-[#EEF2F7] py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto bg-[#F8F8F8] rounded-[28px] sm:rounded-[36px] px-5 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-16">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-5 py-2 rounded-full bg-[#DDE6F2] text-[#1A4FA3] text-xs sm:text-sm font-medium tracking-wide"
        >
          INDUSTRIES WE SERVE
        </motion.div>

        {/* Heading */}
        <motion.div
          className="mt-6 max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-[#1656B8] font-medium leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[58px]">
            Designed For Diverse Kitchen Operations 
          </h2>

          <p className="mt-5 text-[#4A4A4A] text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl">
            Providing reliable kitchen infrastructure solutions that enhance productivity, durability, safety, and efficiency as a trusted industrial kitchen equipment supplier. 
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {industries.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group relative overflow-hidden rounded-[24px] min-h-[300px] cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={item.bg}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-800/55 to-gray-700/0" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <motion.h3
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.2,
                  }}
                  className="text-white text-xl lg:text-2xl font-semibold mb-3"
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.3,
                  }}
                  className="text-white/90 text-sm lg:text-base leading-relaxed max-w-md"
                >
                  {item.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;