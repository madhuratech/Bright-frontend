import { motion } from "framer-motion";

import planning1 from "../../assets/service/planning1.jpg";
import planning2 from "../../assets/service/planning2.jpg";
import planning3 from "../../assets/service/planning3.jpg";

import fab1 from "../../assets/Fab/fab1.png";
import fab2 from "../../assets/Fab/fab2.png";
import fab3 from "../../assets/Fab/fab3.png";

import install1 from "../../assets/Install/install1.png";
import install2 from "../../assets/Install/install2.png";
import install3 from "../../assets/Install/install3.png";

import support1 from "../../assets/support/support1.png";
import support2 from "../../assets/support/support2.png";
import support3 from "../../assets/support/support3.png";

import exhaust1 from "../../assets/exhaust/exhaust1.jpg";
import exhaust2 from "../../assets/exhaust/exhaust2.jpg";
import exhaust3 from "../../assets/exhaust/exhaust3.jpg";

import custom1 from "../../assets/custom/custom1.jpg";
import custom2 from "../../assets/custom/custom2.jpg";
import custom3 from "../../assets/custom/custom3.jpg";

const services = [
  {
    title: "Kitchen Planning & Design",
    images: [planning1, planning2, planning3],
    items: [
      "Commercial Kitchen Layouts",
      "Workflow Optimization",
      "Utility Planning",
      "Space Management",
      "Technical Consultation",
    ],
    description:
      "Innovative kitchen planning solutions crafted to enhance workflow efficiency, maximize productivity, and ensure practical space utilization.",
  },
  {
    title: "SS Fabrication & Manufacturing",
    images: [fab2, fab3, fab1],
    items: [
      "Custom Equipment",
      "Bulk Manufacturing Solutions",
      "Heavy Duty Construction",
      "Hygienic Finishing",
      "Precision Manufacturing",
    ],
    description:
      "Manufacturing high-quality stainless steel solutions designed to deliver durability, hygiene, efficiency, and reliable performance for commercial environments.",
  },
  {
    title: "Installation & Commissioning",
    images: [install1, install2, install3],
    items: [
      "Equipment Installation",
      "Machine Installation",
      "System Testing",
      "Operational Handover",
      "On-Site Training",
    ],
    description:
      "Comprehensive installation support that ensures proper equipment setup, performance optimization, and readiness for daily operations.",
  },
  {
    title: "Maintenance & Technical Support",
    images: [support1, support2, support3],
    items: [
      "Preventive Maintenance",
      "Equipment Servicing",
      "Emergency Repairs",
      "Troubleshooting Support",
      "Auditing",
    ],
    description:
      "Expert maintenance and technical support solutions that enhance equipment durability, improve operational efficiency, and ensure long-term reliability. ",
  },
  {
    title: "Exhaust & Ventilation Systems",
    images: [exhaust1, exhaust2, exhaust3],
    items: [
      "Kitchen Hood Systems",
      "Ducting Solutions",
      "Airflow Management",
      "Smoke Extraction",
      "Ventilation Installation",
    ],
    description:
      "High-performance ventilation infrastructure developed to promote air quality, operational safety, and efficient environmental control.",
  },
  {
    title: "Customized Kitchen Solutions",
    images: [custom1, custom2, custom3],
    items: [
      "Retail Layouts & Design",
      "Industrial Kitchens",
      "Hotels & Catering",
      "Cloud Kitchens",
      "Restaurant Equipment",
    ],
    description:
      "Professionally engineered kitchen systems tailored to support the unique operational demands of hospitality, retail, and industrial sectors. ",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const imageAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export default function ServicesSection() {
  return (
    <section className="bg-[#f5f7fa] py-12 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E63C6]">
            Our Services
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-1 bg-[#1E63C6] mx-auto mt-4 rounded-full"
          />
        </motion.div>

        {/* Services */}
        <div>
          {services.map((service, index) => (
            <div key={index}>
              
              {/* Service Block */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid lg:grid-cols-[300px_1fr] gap-6 md:gap-10 lg:gap-16"
              >
                
                {/* Left Column */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-[#1E63C6] font-semibold text-[24px] sm:text-xl md:text-2xl mb-4 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Service Items */}
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-3 mt-10 md:grid-cols-1 md:space-y-4">
                    {service.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: idx * 0.08,
                          duration: 0.5,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ x: 6 }}
                        className="flex items-start gap-2 md:block text-[11px] sm:text-xs md:text-sm font-medium uppercase tracking-wide text-gray-700 cursor-pointer transition-all"
                      >
                        {/* Mobile Bullet */}
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1E63C6] mt-1.5 flex-shrink-0 md:hidden"></span>

                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Right Column */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-sm sm:text-base md:text-lg leading-7 md:leading-8 text-gray-600 mb-6 md:mb-8 max-w-4xl"
                  >
                    {service.description}
                  </motion.p>

                  {/* Image Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
                    {service.images.map((image, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        custom={imgIndex}
                        variants={imageAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{
                          y: -8,
                          scale: 1.03,
                        }}
                        className="aspect-[4/2.8] overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 rounded-lg"
                      >
                        <img
                          src={image}
                          alt={`${service.title} ${imgIndex + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Divider Line */}
              {index !== services.length - 1 && (
                <div className="w-full h-[1.2px] bg-gray-300 my-12 md:my-16"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}