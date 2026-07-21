import service from "../assets/Banners/service.png";
import { useNavigate } from "react-router-dom";


//se
import Bainemariecounterwithtrayslider from "../assets/se/Bainemariecounterwithtrayslider.webp"
import Bainmarie from "../assets/se/Bainmarie.webp"
import Banimariecounterandtrayslider from "../assets/se/Banimariecounterandtrayslider.webp"
import Billingcounterwithcomputerprovision from "../assets/se/Billingcounterwithcomputerprovision.webp"
import Chatcounter from "../assets/se/Chatcounter.webp"
import Cyclingteacounter from "../assets/se/Cyclingteacounter.webp"
import Fireextinguishercabinet from "../assets/se/Fireextinguishercabinet.webp"
import Foodservicetrollry from "../assets/se/Foodservicetrollry.webp"
import Fourtierrack from "../assets/se/Fourtierrack.webp"
import Fruitdisplayracks from "../assets/se/Fruitdisplayracks.webp"
import Fruitvegetabledisplaycounter from "../assets/se/Fruitvegetabledisplaycounter.webp"
import Housingkeepingtrolley from "../assets/se/Housingkeepingtrolley.webp"
import Platecollectingtrolleys from "../assets/se/Platecollectingtrolleys.webp"
import Platewaemer from "../assets/se/Platewaemer.webp"
import Platformtrolley from "../assets/se/Platformtrolley.webp"
import Potracktier from "../assets/se/Potracktier.webp"
import seatercanteendiningtable from "../assets/se/seatercanteendiningtable.webp"
import Servicetrollry from "../assets/se/Servicetrollry.webp"
import Snacksdisplaycounter from "../assets/se/Snacksdisplaycounter.webp"
import Stafflockerunit from "../assets/se/Stafflockerunit.webp"
import Sweetcorncounter from "../assets/se/Sweetcorncounter.webp"
import Teacoffeetrolley from "../assets/se/Teacoffeetrolley.webp"
import Trayslidetrolley from "../assets/se/Trayslidetrolley.webp"
import Untitleddesign from "../assets/se/Untitleddesign.webp"
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/navbar";

const productsData = {

 "Service Equipments": [
   { image: Bainemariecounterwithtrayslider, title: "Bain Marie Counter with Tray Slider" },
   { image: Bainmarie, title: "Bain Marie" },
   { image: Banimariecounterandtrayslider, title: "Bain Marie Counter and Tray Slider" },
   { image: Billingcounterwithcomputerprovision, title: "Billing Counter with Computer Provision" },
   { image: Chatcounter, title: "Chaat Counter" },
   { image: Cyclingteacounter, title: "Cycling Tea Counter" },
   { image: Fireextinguishercabinet, title: "Fire Extinguisher Cabinet" },
   { image: Foodservicetrollry, title: "Food Service Trolley" },
   { image: Fourtierrack, title: "Four Tier Rack" },
   { image: Fruitdisplayracks, title: "Fruit Display Racks" },
   { image: Fruitvegetabledisplaycounter, title: "Fruit & Vegetable Display Counter" },
   { image: Housingkeepingtrolley, title: "Housekeeping Trolley" },
   { image: Platecollectingtrolleys, title: "Plate Collecting Trolleys" },
   { image: Platewaemer, title: "Plate Warmer" },
   { image: Platformtrolley, title: "Platform Trolley" },
   { image: Potracktier, title: "Pot Rack Tier" },
   { image: seatercanteendiningtable, title: "Seater Canteen Dining Table" },
   { image: Servicetrollry, title: "Service Trolley" },
   { image: Snacksdisplaycounter, title: "Snacks Display Counter" },
   { image: Stafflockerunit, title: "Staff Locker Unit" },
   { image: Sweetcorncounter, title: "Sweet Corn Counter" },
   { image: Teacoffeetrolley, title: "Tea Coffee Trolley" },
   { image: Trayslidetrolley, title: "Tray Slide Trolley" },
   { image: Untitleddesign, title: "Custom Design Unit" }
 ],
 
};

const ServiceEquip = () => {
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
                        backgroundImage: `url(${service})`,
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#3b3b3be6] via-[#00000099] to-[#00000033]" />

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12">
                    <div className="max-w-3xl">
                        <h1 className="mt-10 text-white font-extrabold leading-none tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                            Service Equipments 
                        </h1>

                        <p className="mt-6 max-w-xl text-white text-sm sm:text-base md:text-lg leading-relaxed">
                            Discover premium service equipment designed for commercial kitchens, ensuring efficient food service, durability, smooth operations, and an enhanced customer dining experience.

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
                            Service Equipment 
                        </span>

                        <span className="block text-4xl md:text-5xl lg:text-6xl mt-2">
                            for Professional Food 
                        </span>

                        <span className="block text-4xl md:text-5xl lg:text-6xl mt-2">
                            Service Excellence
                        </span>
                    </h2>

                    <div className="mt-8 max-w-5xl">
                        <p className="text-[#555555] text-sm md:text-base leading-relaxed">
                            As a trusted supplier of commercial service equipment, we provide high-quality solutions designed for efficiency,
                            durability, and reliable performance. Our experienced team offers innovative serving systems, customized equipment,
                            and dependable support to help restaurants, hotels, cafés, catering services, and food businesses deliver
                            exceptional service while maintaining smooth and efficient operations.
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
                                Reliable service equipment delivering efficient performance, lasting durability, and seamless food service for commercial kitchens every day.
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

export default ServiceEquip;