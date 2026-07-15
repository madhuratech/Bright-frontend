const ProductIntro = () => {
  return (
    <section className="bg-[#F0F4FA] py-4 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <h2 className="text-[#0057D9] font-light leading-[1.1] tracking-tight">
          <span className="block text-4xl md:text-5xl lg:text-6xl">
            Commercial Kitchen Equipment
          </span>

          <span className="block text-4xl md:text-5xl lg:text-6xl mt-1">
            Manufacturers & Stainless Steel
          </span>

          <span className="block text-4xl md:text-5xl lg:text-6xl mt-1">
            Fabrication Experts
          </span>
        </h2>

        {/* Description */}
        <div className="mt-8 max-w-5xl">
          <p className="text-[#555555] text-sm md:text-base leading-relaxed">
            Bright Industries delivers precision-engineered commercial kitchen
            equipment and stainless steel fabrication solutions built for
            durability, hygiene, and operational efficiency. From industrial
            cooking systems to custom fabrication projects, our products are
            designed to support high-volume commercial environments across
            hospitality, healthcare, institutional, and industrial sectors.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProductIntro;