import steam from "../assets/Banners/steam.png";
import {useNavigate} from "react-router-dom";

// Steam Counter
import GlassTypeDoubleJacketedVessel from "../assets/steam/GlassTypeDoubleJacketedVessel.webp";
import IdlySteamer from "../assets/steam/IdlySteamer.webp";
import RiceCookingVessel from "../assets/steam/RiceCookingVessel.webp";
import SteamBoiler from "../assets/steam/SteamBoiler.webp";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/navbar";

const productsData = {

"Steam Equipments":[
  {image: GlassTypeDoubleJacketedVessel, title: "Glass Type Double Jacketed Vessel"},
  {image: IdlySteamer, title: "IdlySteamer"},
  {image: RiceCookingVessel, title: "Rice Cooking Vessel"},
  {image: SteamBoiler, title: "Steam Boiler"}
]
};

const Steam = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar/>
            {/* Hero Section */}
            <section className="relative min-h-[65vh] lg:min-h-[85vh] flex items-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${steam})`,
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#3b3b3be6] via-[#00000099] to-[#00000033]" />

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12">
                    <div className="max-w-3xl">
                        <h1 className="mt-10 text-white font-extrabold leading-none tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                            Steam Equipments
                        </h1>

                        <p className="mt-6 max-w-xl text-white text-sm sm:text-base md:text-lg leading-relaxed">
                            Explore premium steam equipment designed for commercial kitchens, delivering efficient steaming, reliable performance, energy savings, and consistent cooking results every day.
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
                        <span className="block text-4xl md:text-5xl lg:text-6xl">
                            Steam Equipment
                        </span>

                        <span className="block text-4xl md:text-5xl lg:text-6xl mt-2">
                            for Professional
                        </span>

                        <span className="block text-4xl md:text-5xl lg:text-6xl mt-2">
                            Kitchen Excellence
                        </span>
                    </h2>

                    <div className="mt-8 max-w-5xl">
                        <p className="text-[#555555] text-sm md:text-base leading-relaxed">
                            As a trusted supplier of commercial steam equipment, we provide high-quality solutions
                            designed for efficiency, durability, and reliable performance. Our experienced team delivers
                            advanced steam cooking systems, customized equipment, and dependable support to help restaurants,
                            hotels, catering services, and food businesses improve productivity, maintain food quality,
                            and achieve seamless kitchen operations.
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
                                Reliable steam equipment delivering efficient cooking, superior durability,
                                energy efficiency, and consistent performance for commercial kitchens every day.
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

export default Steam;