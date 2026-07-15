import { motion } from "framer-motion";
import aboutImage from "../../assets/about/aboutImage.png";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    x: 40,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const AboutSection = () => {
  return (
    <section className="bg-[#edf1f7] py-10 px-4 md:px-8">
      <motion.div
        className="max-w-[1600px] mx-auto rounded-[32px] overflow-hidden px-6 md:px-12 py-16 relative"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg,#f5f5f5 0,#f5f5f5 2px,#fafafa 2px,#fafafa 6px)",
        }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_0.9fr] gap-8 items-center">
          
          {/* Left Content */}
          <div className="pr-4">
            
            <motion.span
              variants={itemVariants}
              className="inline-block bg-[#dce6f8] text-[#0A59BE] text-sm font-medium px-5 py-2 rounded-full mb-6 uppercase tracking-wide"
            >
              About Us
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-[#0A59BE] text-5xl md:text-[60px] font-medium mb-8 leading-[1.05]"
            >
              <span className="block">Crafting Excellence.</span>
              <span className="block">Delivering Reliability.</span>
              <span className="block">Supporting Growth.</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-[#4d4d4d] text-[22px] leading-[1.8] max-w-3xl mb-10 text-justify"
            >
            At Bright Industries, we transform ideas into dependable engineering solutions. 
            With extensive industry experience and a focus on precision manufacturing,
            we provide commercial kitchen equipment and industrial products that meet 
            the highest standards of quality, durability, and performance
            </motion.p>

            <motion.button
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#0A59BE] hover:bg-[#0847a5] text-white px-8 py-4 rounded-full font-semibold text-base shadow-md transition-colors"
            >
              Discover More About Us
            </motion.button>
          </div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            className="w-full flex justify-center lg:justify-end"
          >
            <motion.img
              src={aboutImage}
              alt="About Bright Industries"
              className="w-full max-w-[520px] h-[520px] object-cover rounded-[16px] shadow-lg"
              whileHover={{
                scale: 1.03,
              }}
              transition={{
                duration: 0.4,
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;