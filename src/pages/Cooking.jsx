import slide7 from "../assets/hero/slide7.png";


//ce
import Bricktypemilkboilerstove from "../assets/ce/Bricktypemilkboilerstove.webp"
import Bricktypemilkboilingburner from "../assets/ce/Bricktypemilkboilingburner.webp"
import bricktypesweetstove from "../assets/ce/bricktypesweetstove .webp"
import Briyaniburner from "../assets/ce/Briyaniburner.webp"
import burnerchinese from "../assets/ce/burnerchinese.webp"
import Burnercookingange from "../assets/ce/Burnercookingange.webp"
import Chapathinallcuttingmachine from "../assets/ce/Chapathinallcuttingmachine.webp"
import chapathipressingmachine from "../assets/ce/chapathipressingmachine.webp"
import Chinesecookingrange from "../assets/ce/Chinesecookingrange.webp"
import Combioven from "../assets/ce/Combioven.webp"
import Cookingmixer from "../assets/ce/Cookingmixer.webp"
import Dosahotplate from "../assets/ce/Dosahotplate.webp"
import Dumbiryaniwoodstove from "../assets/ce/Dumbiryaniwoodstove.webp"
import Fourbrnerrangewithoven from "../assets/ce/Fourbrnerrangewithoven.webp"
import Halwamakingmachine from "../assets/ce/Halwamakingmachine.webp"
import Heavydutystockpotburner from "../assets/ce/Heavydutystockpotburner.webp"
import Hotcasewithburners from "../assets/ce/Hotcasewithburners.webp"
import Hotplate from "../assets/ce/Hotplate.webp"
import Hotplatewithgriddle from "../assets/ce/Hotplatewithgriddle.webp"
import Idlisteamcooker from "../assets/ce/Idlisteamcooker.webp"
import Semiautochapathimaker from "../assets/ce/Semiautochapathimaker.webp"
import Semiautodosamaker from "../assets/ce/Semiautodosamaker.webp"
import Singburnercookingrange from "../assets/ce/Singburnercookingrange.webp"
import Snackfryingstation from "../assets/ce/Snackfryingstation.webp"
import StandingtypeDoublefryer from "../assets/ce/StandingtypeDoublefryer.webp"
import Teacoffeeburnertablewithwarmer from "../assets/ce/Teacoffeeburnertablewithwarmer.webp"
import Tiltingboilingpan from "../assets/ce/Tiltingboilingpan.webp"
import Tiltingbraisingpan from "../assets/ce/Tiltingbraisingpan.webp"
import Twoburnerchinesecookingrange from "../assets/ce/Twoburnerchinesecookingrange.webp"
import Dosarangewithsplash from "../assets/ce/Dosarangewithsplash.webp"
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";

const productsData = {

 "Cooking Equipments": [
   { image: Bricktypemilkboilerstove, title: "Brick Type Milk Boiler Stove" },
   { image: Bricktypemilkboilingburner, title: "Brick Type Milk Boiling Burner" },
   { image: bricktypesweetstove, title: "Brick Type Sweet Stove" },
   { image: Briyaniburner, title: "Biryani Burner" },
   { image: burnerchinese, title: "Chinese Burner" },
   { image: Burnercookingange, title: "Burner Cooking Range" },
   { image: Chapathinallcuttingmachine, title: "Chapathi Ball Cutting Machine" },
   { image: chapathipressingmachine, title: "Chapathi Pressing Machine" },
   { image: Chinesecookingrange, title: "Chinese Cooking Range" },
   { image: Combioven, title: "Combi Oven" },
   { image: Cookingmixer, title: "Cooking Mixer" },
   { image: Dosahotplate, title: "Dosa Hot Plate" },
   { image: Dumbiryaniwoodstove, title: "Dum Biryani Wood Stove" },
   { image: Fourbrnerrangewithoven, title: "Four Burner Range with Oven" },
   { image: Halwamakingmachine, title: "Halwa Making Machine" },
   { image: Heavydutystockpotburner, title: "Heavy Duty Stock Pot Burner" },
   { image: Hotcasewithburners, title: "Hot Case with Burners" },
   { image: Hotplate, title: "Hot Plate" },
   { image: Hotplatewithgriddle, title: "Hot Plate with Griddle" },
   { image: Idlisteamcooker, title: "Idli Steam Cooker" },
   { image: Semiautochapathimaker, title: "Semi-Auto Chapathi Maker" },
   { image: Semiautodosamaker, title: "Semi-Auto Dosa Maker" },
   { image: Singburnercookingrange, title: "Single Burner Cooking Range" },
   { image: Snackfryingstation, title: "Snack Frying Station" },
   { image: StandingtypeDoublefryer, title: "Standing Type Double Fryer" },
   { image: Teacoffeeburnertablewithwarmer, title: "Tea Coffee Burner Table with Warmer" },
   { image: Tiltingboilingpan, title: "Tilting Boiling Pan" },
   { image: Tiltingbraisingpan, title: "Tilting Braising Pan" },
   { image: Twoburnerchinesecookingrange, title: "Two Burner Chinese Cooking Range" },
   { image: Dosarangewithsplash, title: "Dosa Range with Splash" }
 ],
};

const Cooking = () => {
    return (
        <>
            <Navbar />
            {/* Hero Section */}
            <section className="relative min-h-[65vh] lg:min-h-[85vh] flex items-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${slide7})`,
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#3b3b3be6] via-[#00000099] to-[#00000033]" />

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12">
                    <div className="max-w-3xl">
                        <h1 className="text-white font-extrabold leading-none tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                            Cooking Equipments
                        </h1>

                        <p className="mt-6 max-w-xl text-white text-sm sm:text-base md:text-lg leading-relaxed">
                            Offering expert guidance for planning efficient commercial
                            kitchens tailored to your specific requirements.
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
                        <span className="block text-4xl md:text-5xl lg:text-6xl">
                            Commercial Kitchen Equipment
                        </span>

                        <span className="block text-4xl md:text-5xl lg:text-6xl mt-2">
                            Manufacturers & Stainless Steel
                        </span>

                        <span className="block text-4xl md:text-5xl lg:text-6xl mt-2">
                            Fabrication Experts
                        </span>
                    </h2>

                    <div className="mt-8 max-w-5xl">
                        <p className="text-[#555555] text-sm md:text-base leading-relaxed">
                            Bright Industries delivers precision-engineered commercial
                            kitchen equipment and stainless steel fabrication solutions
                            built for durability, hygiene, and operational efficiency.
                            From industrial cooking systems to custom fabrication projects,
                            our products are designed to support high-volume commercial
                            environments across hospitality, healthcare, institutional,
                            and industrial sectors.
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
                                Discover our premium range of commercial kitchen equipment
                                designed to deliver superior performance, durability, and
                                operational efficiency.
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

export default Cooking;