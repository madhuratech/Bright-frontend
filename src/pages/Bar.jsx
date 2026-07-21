import bar from "../assets/Banners/Bar.png";
import { useNavigate } from "react-router-dom";

// Arabian Food Machinery
import Backbarcooler from "../assets/barunit/Backbarcooler.webp"
import Barcounter from "../assets/barunit/Barcounter.webp"
import Bartenderblenderstation from "../assets/barunit/Bartenderblenderstation.webp"
import Bartenderliquorstation from "../assets/barunit/Bartenderliquorstation.webp"
import Bartenderwastebin from "../assets/barunit/Bartenderwastebin.webp"
import BartenderIcechest from "../assets/barunit/BartenderIcechest.webp"
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";

const productsData = {

  "Bar Units": [
    { image: Backbarcooler, title: "Back bar cooler" },
    { image: Barcounter, title: "Bar Counter" },
    { image: Bartenderblenderstation, title: "Bartender blender station" },
    { image: BartenderIcechest, title: "Bartender Ice Chest" },
    { image: Bartenderliquorstation, title: "Bartender liquor station" },
    { image: Bartenderwastebin, title: "Bartender waste bin" }
    
  ],
};

const Bar = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            {/* Hero Section */}
            <section className="relative min-h-[65vh] lg:min-h-[85vh] flex items-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${bar})`,
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#3b3b3be6] via-[#00000099] to-[#00000033]" />

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12">
                    <div className="max-w-3xl">
                        <h1 className="text-white font-extrabold leading-none tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                            Bar Units
                        </h1>

                        <p className="mt-6 max-w-xl text-white text-sm sm:text-base md:text-lg leading-relaxed">
                            Create a stylish and efficient beverage station with premium bar units designed for smooth service, durability, and everyday commercial use.
                        </p>

                        <button className="mt-8 bg-[#0057D9] text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition duration-300"
                        onClick={()=>navigate("/contact")}>
                            Get Consultation
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="bg-[#F0F4FA] py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="text-[#0057D9] font-light leading-tight">
                        <span className="block text-4xl md:text-5xl lg:text-6xl mt-10">
                            Bar Units 
                        </span>

                        <span className="block text-4xl md:text-5xl lg:text-6xl mt-2">
                            Designed for Exceptional
                        </span>

                        <span className="block text-4xl md:text-5xl lg:text-6xl mt-2">
                            Beverage Service
                        </span>
                    </h2>

                    <div className="mt-8 max-w-5xl">
                        <p className="text-[#555555] text-sm md:text-base leading-relaxed">
                            A well-planned bar setup makes every drink service faster and more organized.
                            At Bright Industries, we offer premium bar units that combine modern design with practical functionality.
                            Built for hotels, restaurants, cafés, lounges, bars, and hospitality venues, our solutions provide smart storage,
                            efficient workspaces, and lasting durability. Whether serving customers during peak hours or special events,
                            our bar units help your team work efficiently while creating an impressive experience.
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
                                Premium bar units crafted for efficient beverage preparation, organized workspaces, and reliable performance in busy hospitality environments every day.
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
            <Footer />
        </>
    );
};

export default Bar;