import display from "../assets/Banners/Display.png";

// Display Counter
import chocolatedisplaycounter from "../assets/dc/chocolatedisplaycounter.webp"
import colddisplaycounter from "../assets/dc/colddisplaycounter.webp"
import Coldsaladdisplaycounter from "../assets/dc/Coldsaladdisplaycounter.webp"
import SSsideopendisplaycounter from "../assets/dc/SSsideopendisplaycounter.webp"
import SSbentdisplaycounter from "../assets/dc/SSbentdisplaycounter.webp"
import SScurvedhotlillydisplaycounter from "../assets/dc/SScurvedhotlillydisplaycounter.webp"
import SSmarbledisplaycounter from "../assets/dc/SSmarbledisplaycounter.webp"
import SSPatisserieDisplayCounter from "../assets/dc/SSPatisserieDisplayCounter.webp"
import SSRemovableglassdisplaycounter from "../assets/dc/SSRemovableglassdisplaycounter.webp"
import SSsaladdisplaycounter from "../assets/dc/SSsaladdisplaycounter.webp"
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";

const productsData = {

"Display Counter": [
  {image: chocolatedisplaycounter, title: "Chocolate Display Counter"},
  {image: colddisplaycounter, title: "Cold Display Counter"},
  {image: Coldsaladdisplaycounter, title:"Cold Salad Display Counter"},
  {image: SSsideopendisplaycounter, title: "SS side Open Display Counter"},
  {image: SSbentdisplaycounter, title:"SS Bent display counter"},
  {image: SScurvedhotlillydisplaycounter, title: "SS Curved Hot Lilly Display Counter"},
  {image: SSmarbledisplaycounter, title: "SS Marbled Display Counter"},
  {image: SSPatisserieDisplayCounter, title: "SS Patisserie Display Counter"},
  {image: SSRemovableglassdisplaycounter, title: "SS Removable Glass Display Counter"},
  {image: SSsaladdisplaycounter, title:"SS Salad Display Counter"}
]

};

const Display = () => {
    return (
        <>
            <Navbar />
            {/* Hero Section */}
            <section className="relative min-h-[65vh] lg:min-h-[85vh] flex items-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${display})`,
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#3b3b3be6] via-[#00000099] to-[#00000033]" />

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12">
                    <div className="max-w-3xl">
                        <h1 className="mt-10 text-white font-extrabold leading-none tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                            Display Counters
                        </h1>

                        <p className="mt-6 max-w-xl text-white text-sm sm:text-base md:text-lg leading-relaxed">
                            Showcase your products with stylish display counters designed to keep food fresh, attract customers, and enhance every retail or dining space
                        </p>

                        <button className="mt-8 bg-[#0057D9] text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition duration-300">
                            Get Consultation
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="bg-[#F0F4FA] py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="text-[#0057D9] font-light leading-tight">
                        <span className="block text-4xl md:text-5xl lg:text-6xl ">
                            Display Counters
                        </span>

                        <span className="block text-4xl md:text-5xl lg:text-6xl mt-2">
                            That Showcase
                        </span>

                        <span className="block text-4xl md:text-5xl lg:text-6xl mt-2">
                            Products with Style
                        </span>
                    </h2>

                    <div className="mt-8 max-w-5xl">
                        <p className="text-[#555555] text-sm md:text-base leading-relaxed">
                            An attractive display can make a lasting impression on your customers.
                            Bright Industries offers premium display counters that combine elegant design
                            with dependable performance to keep food fresh and visually appealing.
                            Ideal for bakeries, cafés, restaurants, supermarkets, sweet shops, and food outlets,
                            our display solutions provide excellent visibility, efficient cooling, and durable construction,
                            helping businesses present their products with confidence while improving the overall customer experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            {Object.entries(productsData).map(([category, products]) => (
                <section key={category} className="bg-white py-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        {/* Heading */}
                        <div className="text-center mb-14">
                            <span className="uppercase tracking-[4px] text-sm text-[#0057D9] font-medium">
                                Our Products
                            </span>

                            <h2 className="mt-4 text-4xl md:text-5xl font-light text-[#1F1F1F]">
                                {category}
                            </h2>

                            <p className="mt-4 max-w-3xl mx-auto text-[#666666] leading-relaxed">
                                Modern display counters designed to preserve freshness, enhance product visibility, and create an appealing presentation for commercial food businesses.
                            </p>
                        </div>

                        {/* Products Grid */}
                        {/* Products */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
                            {products.map((product, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#0057D9]/10 shadow-sm hover:shadow-[0_25px_50px_-12px_rgba(0,87,217,0.20)] transition-all duration-500 hover:-translate-y-2"
                                >
                                    {/* Product Image */}
                                    <div className="aspect-square bg-white flex items-center justify-center p-6 md:p-8 overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Product Details */}
                                    <div className="relative p-4 md:p-5">
                                        <div className="absolute top-0 left-6 right-6 h-[1px] bg-[#E2E8F0]" />

                                        <h3 className="mt-4 text-base md:text-lg font-semibold text-gray-900 text-center">
                                            {product.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            ))}
            <Footer/>
        </>
    );
};

export default Display;