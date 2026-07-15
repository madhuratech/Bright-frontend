import { useState } from "react";
import { motion } from "framer-motion";
import Shawarma from "../../assets/products/Shawarma.jpg"
import FourBurner from "../../assets/products/FourBurner.jpg"
import Conveyor from "../../assets/products/Conveyor.jpg"
import Trolley from "../../assets/products/Trolley.jpg"
import Dishwasher from "../../assets/products/Dishwasher.jpg"
import exhaust from "../../assets/products/exhaust.png"


const products = [
  {
    image:Shawarma,
    title: "Arabian Food",
  },
  {
    image:FourBurner,
    title: "Cooking Equipments",
  },
  {
    image:Conveyor,
    title: "Preparation Equipment",
  },
  {
    image:Trolley,
    title: "Service Equipment",
  },
  {
    image:Dishwasher,
    title: "Washing Equipment",
  },
  {
    image:exhaust,
    title: "Exhaust Equipments",
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
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ProductCard = ({ item }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      className="group relative h-[420px] rounded-[28px] overflow-hidden bg-gray-200 shadow-sm"
    >
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-300" />
      )}

      <motion.img
        src={item.image}
        alt={item.title}
        loading="lazy"
        decoding="async"
        width="600"
        height="420"
        onLoad={() => setLoaded(true)}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6 }}
        className={`w-full h-full object-cover ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="absolute bottom-0 left-0 w-full p-6"
      >
        <p className="text-white/70 text-sm mb-2">
          Premium Industrial Solutions
        </p>

        <h3 className="text-white text-2xl font-semibold leading-tight">
          {item.title}
        </h3>
      </motion.div>
    </motion.div>
  );
};

const ProductSection = () => {
  return (
    <section className="bg-[#E9EEF5] py-10 md:py-14 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-14"
        >
          <div className="w-full lg:w-[55%]">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block px-5 py-2 rounded-full bg-[#0E5CC8]/10 text-[#0E5CC8] text-sm font-medium tracking-wide mb-5"
            >
              WHAT WE MANUFACTURE
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="text-[#111] text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1]"
            >
              Engineered Equipment For Modern Food Operations
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="w-full lg:w-[40%]"
          >
            <p className="text-[#555] text-base leading-relaxed">
             From food preparation stations to complete kitchen infrastructure, 
             our solutions are crafted to deliver superior functionality, durability, 
             and operational excellence for businesses of every scale.
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="mt-6 bg-[#0E5CC8] text-white px-8 py-3 rounded-full font-medium"
            >
              Browse Products
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;