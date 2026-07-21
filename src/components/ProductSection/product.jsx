

// Product Images
import Shawarma from "../../assets/products/Shawarma.webp";
import FourBurner from "../../assets/products/FourBurner.webp";
import Conveyor from "../../assets/products/Conveyor.webp";
import Trolley from "../../assets/products/Trolley.webp";
import Dishwasher from "../../assets/products/Dishwasher.webp";
import Exhaust from "../../assets/products/exhaust.webp";
import FadeInSection from "../Fade/FadeInSection";
import { useNavigate } from "react-router-dom";

const products = [
  {
    image: Shawarma,
    title: "Arabian Food",
  },
  {
    image: FourBurner,
    title: "Cooking Equipments",
  },
  {
    image: Conveyor,
    title: "Preparation Equipment",
  },
  {
    image: Trolley,
    title: "Service Equipment",
  },
  {
    image: Dishwasher,
    title: "Washing Equipment",
  },
  {
    image: Exhaust,
    title: "Exhaust Equipments",
  },
];

const ProductCard = ({ item }) => {
 
  return (
    <div
      className="
        group
        relative
        h-[420px]
        overflow-hidden
        rounded-[28px]
        bg-gray-100
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* Product Image */}
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        decoding="async"
        width={600}
        height={420}
        className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6">
        <p className="mb-2 text-sm text-white/70">
          Premium Industrial Solutions
        </p>

        <h3 className="text-2xl font-semibold text-white">
          {item.title}
        </h3>
      </div>
    </div>
  );
};

const ProductSection = () => {
   const navigate = useNavigate();
  return (
    <section className="overflow-hidden bg-[#E9EEF5] px-4 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <FadeInSection>
          <div className="mb-14 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            {/* Left Content */}
            <div className="w-full lg:w-[55%]">
              <span className="mb-5 inline-block rounded-full bg-[#0E5CC8]/10 px-5 py-2 text-sm font-medium tracking-wide text-[#0E5CC8]">
                WHAT WE MANUFACTURE
              </span>

              <h2 className="text-4xl font-light leading-[1.1] text-[#111] md:text-5xl lg:text-6xl">
                Engineered Equipment For Modern Food Operations
              </h2>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-[40%]">
              <p className="text-base leading-relaxed text-[#555]">
                From food preparation stations to complete kitchen
                infrastructure, our solutions are crafted to deliver
                superior functionality, durability, and operational
                excellence for businesses of every scale.
              </p>

              <button
                className="
                  mt-6
                  rounded-full
                  bg-[#0E5CC8]
                  px-8
                  py-3
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-[#084AA8]
                  active:scale-95
                "
                onClick={() => navigate("/products")}>
                Browse Products
              </button>
            </div>
          </div>
        </FadeInSection>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item, index) => (
            <FadeInSection key={item.title} delay={index * 100}>
              <ProductCard item={item} />
            </FadeInSection>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductSection;