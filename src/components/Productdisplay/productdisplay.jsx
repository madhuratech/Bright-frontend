import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// AFM
import Alfahamgrill from "../../assets/afm/Alfahamgrill.webp"
import Chickengiiller from "../../assets/afm/Chickengiiller.webp"
import Shawarmamachine from "../../assets/afm/Shawarmamachine.webp"
import Tandooripot from "../../assets/afm/Tandooripot.webp"
import Barbeque from "../../assets/afm/Barbeque.webp"


//be
import Chaatcounterwithburner from "../../assets/be/Chaatcounterwithburner.webp"
import Teacoffeecounter from "../../assets/be/Teacoffeecounter.webp"


//ce
import Bricktypemilkboilerstove from "../../assets/ce/Bricktypemilkboilerstove.webp"
import Bricktypemilkboilingburner from "../../assets/ce/Bricktypemilkboilingburner.webp"
import bricktypesweetstove from "../../assets/ce/bricktypesweetstove .webp"
import Briyaniburner from "../../assets/ce/Briyaniburner.webp"
import burnerchinese from "../../assets/ce/burnerchinese.webp"
import Burnercookingange from "../../assets/ce/Burnercookingange.webp"
import Chapathinallcuttingmachine from "../../assets/ce/Chapathinallcuttingmachine.webp"
import chapathipressingmachine from "../../assets/ce/chapathipressingmachine.webp"
import Chinesecookingrange from "../../assets/ce/Chinesecookingrange.webp"
import Combioven from "../../assets/ce/Combioven.webp"
import Cookingmixer from "../../assets/ce/Cookingmixer.webp"
import Dosahotplate from "../../assets/ce/Dosahotplate.webp"
import Dumbiryaniwoodstove from "../../assets/ce/Dumbiryaniwoodstove.webp"
import Fourbrnerrangewithoven from "../../assets/ce/Fourbrnerrangewithoven.webp"
import Halwamakingmachine from "../../assets/ce/Halwamakingmachine.webp"
import Heavydutystockpotburner from "../../assets/ce/Heavydutystockpotburner.webp"
import Hotcasewithburners from "../../assets/ce/Hotcasewithburners.webp"
import Hotplate from "../../assets/ce/Hotplate.webp"
import Hotplatewithgriddle from "../../assets/ce/Hotplatewithgriddle.webp"
import Idlisteamcooker from "../../assets/ce/Idlisteamcooker.webp"
import Semiautochapathimaker from "../../assets/ce/Semiautochapathimaker.webp"
import Semiautodosamaker from "../../assets/ce/Semiautodosamaker.webp"
import Singburnercookingrange from "../../assets/ce/Singburnercookingrange.webp"
import Snackfryingstation from "../../assets/ce/Snackfryingstation.webp"
import StandingtypeDoublefryer from "../../assets/ce/StandingtypeDoublefryer.webp"
import Teacoffeeburnertablewithwarmer from "../../assets/ce/Teacoffeeburnertablewithwarmer.webp"
import Tiltingboilingpan from "../../assets/ce/Tiltingboilingpan.webp"
import Tiltingbraisingpan from "../../assets/ce/Tiltingbraisingpan.webp"
import Twoburnerchinesecookingrange from "../../assets/ce/Twoburnerchinesecookingrange.webp"
import Dosarangewithsplash from "../../assets/ce/Dosarangewithsplash.webp"




//ee
import Doubleskinexhausthoodwebp from "../../assets/ee/Doubleskinexhausthoodwebp.webp"
import Exhausthood from "../../assets/ee/Exhausthood.webp"
import Walltypeexhausthood from "../../assets/ee/Walltypeexhausthood.webp"
import Exhausthooddoubleplenum from "../../assets/ee/Exhausthooddoubleplenum.webp"
import Exhaust from "../../assets/ee/Exhaust.webp"
import Exhaustdouble from "../../assets/ee/Exhaustdouble.webp"

//pe
import Coconutscrapper from "../../assets/pe/Coconutscrapper.webp"
import Conventionalwetgrinder from "../../assets/pe/Conventionalwetgrinder.webp"
import Cuttermixer from "../../assets/pe/Cuttermixer.webp"
import Doughkneaderwebp from "../../assets/pe/Doughkneaderwebp.webp"
import Granitetoptable from "../../assets/pe/Granitetoptable.webp"
import Instantchutneymasalagrinder from "../../assets/pe/Instantchutneymasalagrinder.webp"
import Instantricegrinder from "../../assets/pe/Instantricegrinder.webp"
import Liquidsispensingtank from "../../assets/pe/Liquidsispensingtank.webp"
import Masalatraytrolley from "../../assets/pe/Masalatraytrolley.webp"
import Measlicer from "../../assets/pe/Measlicer.webp"
import Meatmincer from "../../assets/pe/Meatmincer.webp"
import Oilstoragetankwithdispensingunit from "../../assets/pe/Oilstoragetankwithdispensingunit.webp"
import Parottadoughpreparationtable from "../../assets/pe/Parottadoughpreparationtable.webp"
import Potatopeeler from "../../assets/pe/Potatopeeler.webp"
import Pulverizermachine from "../../assets/pe/Pulverizermachine.webp"
import ReparationtablewithStorage from "../../assets/pe/ReparationtablewithStorage.webp"
import Ricewasher from "../../assets/pe/Ricewasher.webp"
import SSsupervisordesk from "../../assets/pe/SSsupervisordesk.webp"
import SSworktable from "../../assets/pe/SSworktable.webp"
import Tiltingdrinder from "../../assets/pe/Tiltingdrinder.webp"
import Worktable from "../../assets/pe/Worktable.webp"

//se
import Bainemariecounterwithtrayslider from "../../assets/se/Bainemariecounterwithtrayslider.webp"
import Bainmarie from "../../assets/se/Bainmarie.webp"
import Banimariecounterandtrayslider from "../../assets/se/Banimariecounterandtrayslider.webp"
import Billingcounterwithcomputerprovision from "../../assets/se/Billingcounterwithcomputerprovision.webp"
import Chatcounter from "../../assets/se/Chatcounter.webp"
import Cyclingteacounter from "../../assets/se/Cyclingteacounter.webp"
import Fireextinguishercabinet from "../../assets/se/Fireextinguishercabinet.webp"
import Foodservicetrollry from "../../assets/se/Foodservicetrollry.webp"
import Fourtierrack from "../../assets/se/Fourtierrack.webp"
import Fruitdisplayracks from "../../assets/se/Fruitdisplayracks.webp"
import Fruitvegetabledisplaycounter from "../../assets/se/Fruitvegetabledisplaycounter.webp"
import Housingkeepingtrolley from "../../assets/se/Housingkeepingtrolley.webp"
import Platecollectingtrolleys from "../../assets/se/Platecollectingtrolleys.webp"
import Platewaemer from "../../assets/se/Platewaemer.webp"
import Platformtrolley from "../../assets/se/Platformtrolley.webp"
import Potracktier from "../../assets/se/Potracktier.webp"
import seatercanteendiningtable from "../../assets/se/seatercanteendiningtable.webp"
import Servicetrollry from "../../assets/se/Servicetrollry.webp"
import Snacksdisplaycounter from "../../assets/se/Snacksdisplaycounter.webp"
import Stafflockerunit from "../../assets/se/Stafflockerunit.webp"
import Sweetcorncounter from "../../assets/se/Sweetcorncounter.webp"
import Teacoffeetrolley from "../../assets/se/Teacoffeetrolley.webp"
import Trayslidetrolley from "../../assets/se/Trayslidetrolley.webp"
import Untitleddesign from "../../assets/se/Untitleddesign.webp"

//we
import Chickencleaningtablewithstorage from "../../assets/we/Chickencleaningtablewithstorage.webp"
import Conveyordishwasher from "../../assets/we/Conveyordishwasher.webp"
import Dishlandingtable from "../../assets/we/Dishlandingtable.webp"
import Entrytablewithprerinseunit from "../../assets/we/Entrytablewithprerinseunit.webp"
import Glasswasher from "../../assets/we/Glasswasher.webp"
import Handwashbasin from "../../assets/we/Handwashbasin.webp"
import Hoodtypedishwasher from "../../assets/we/Hoodtypedishwasher.webp"
import Meatwashingtablewithsink from "../../assets/we/Meatwashingtablewithsink.webp"
import Potwashsink from "../../assets/we/Potwashsink.webp"
import Singlepotwashsink from "../../assets/we/Singlepotwashsink.webp"
import Threesinkunit from "../../assets/we/Threesinkunit.webp"
import Twosinkunit from "../../assets/we/Twosinkunit.webp"
import Vegetablecleaningtablewithsinkstorage from "../../assets/we/Vegetablecleaningtablewithsinkstorage.webp"
import Worktablewithsink from "../../assets/we/Worktablewithsink.webp"

// Bar unit
import Backbarcooler from "../../assets/barunit/Backbarcooler.webp"
import Barcounter from "../../assets/barunit/Barcounter.webp"
import Bartenderblenderstation from "../../assets/barunit/Bartenderblenderstation.webp"
import Bartenderliquorstation from "../../assets/barunit/Bartenderliquorstation.webp"
import Bartenderwastebin from "../../assets/barunit/Bartenderwastebin.webp"
import BartenderIcechest from "../../assets/barunit/BartenderIcechest.webp"

// Display Counter
import chocolatedisplaycounter from "../../assets/dc/chocolatedisplaycounter.webp"
import colddisplaycounter from "../../assets/dc/colddisplaycounter.webp"
import Coldsaladdisplaycounter from "../../assets/dc/Coldsaladdisplaycounter.webp"
import SSsideopendisplaycounter from "../../assets/dc/SSsideopendisplaycounter.webp"
import SSbentdisplaycounter from "../../assets/dc/SSbentdisplaycounter.webp"
import SScurvedhotlillydisplaycounter from "../../assets/dc/SScurvedhotlillydisplaycounter.webp"
import SSmarbledisplaycounter from "../../assets/dc/SSmarbledisplaycounter.webp"
import SSPatisserieDisplayCounter from "../../assets/dc/SSPatisserieDisplayCounter.webp"
import SSRemovableglassdisplaycounter from "../../assets/dc/SSRemovableglassdisplaycounter.webp"
import SSsaladdisplaycounter from "../../assets/dc/SSsaladdisplaycounter.webp"

// Steam Counter
import GlassTypeDoubleJacketedVessel from "../../assets/steam/GlassTypeDoubleJacketedVessel.webp";
import IdlySteamer from "../../assets/steam/IdlySteamer.webp";
import RiceCookingVessel from "../../assets/steam/RiceCookingVessel.webp";
import SteamBoiler from "../../assets/steam/SteamBoiler.webp";

const categories = [
    "All",
    "Arabian Food Machinery",
    "Bakery Equipments",
    "Cooking Equipments",
    "Exhaust Equipments",
    "Service Equipments",
    "Preparation Equipments",
    "Washing Equipments",
    "Bar Units",
    "Display Counter",
    "Steam Equipments"
];

const productsData = {
 "Arabian Food Machinery": [
  { image: Alfahamgrill, title: "Al Faham Grill" },
  { image: Chickengiiller, title: "Chicken Griller" },
  { image: Shawarmamachine, title: "Shawarma Machine" },
  { image: Tandooripot, title: "Tandoori Pot" },
  { image: Barbeque, title: "Barbeque" }
 ],
 "Bakery Equipments": [
  { image: Chaatcounterwithburner, title: "Chaat Counter with Burner" },
  { image: Teacoffeecounter, title: "Tea Coffee Counter" }
],

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

"Exhaust Equipments": [
  { image: Doubleskinexhausthoodwebp, title: "Double Skin Exhaust Hood" },
  { image: Exhausthood, title: "Exhaust Hood" },
  { image: Walltypeexhausthood, title: "Wall Type Exhaust Hood" },
  {image: Exhausthooddoubleplenum, title: "Exhaust Hood Double Plenum"},
  {image: Exhaust, title: "Exhaust"},
  {image: Exhaustdouble, title: "Exhaust Double"}
  

],

"Preparation Equipments": [
  { image: Coconutscrapper, title: "Coconut Scraper" },
  { image: Conventionalwetgrinder, title: "Conventional Wet Grinder" },
  { image: Cuttermixer, title: "Cutter Mixer" },
  { image: Doughkneaderwebp, title: "Dough Kneader" },
  { image: Granitetoptable, title: "Granite Top Table" },
  { image: Instantchutneymasalagrinder, title: "Instant Chutney Masala Grinder" },
  { image: Instantricegrinder, title: "Instant Rice Grinder" },
  { image: Liquidsispensingtank, title: "Liquid Dispensing Tank" },
  { image: Masalatraytrolley, title: "Masala Tray Trolley" },
  { image: Measlicer, title: "Meat Slicer" },
  { image: Meatmincer, title: "Meat Mincer" },
  { image: Oilstoragetankwithdispensingunit, title: "Oil Storage Tank with Dispensing Unit" },
  { image: Parottadoughpreparationtable, title: "Parotta Dough Preparation Table" },
  { image: Potatopeeler, title: "Potato Peeler" },
  { image: Pulverizermachine, title: "Pulverizer Machine" },
  { image: ReparationtablewithStorage, title: "Preparation Table with Storage" },
  { image: Ricewasher, title: "Rice Washer" },
  { image: SSsupervisordesk, title: "SS Supervisor Desk" },
  { image: SSworktable, title: "SS Work Table" },
  { image: Tiltingdrinder, title: "Tilting Grinder" },
  { image: Worktable, title: "Work Table" }
],

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

"Washing Equipments": [
  { image: Chickencleaningtablewithstorage, title: "Chicken Cleaning Table with Storage" },
  { image: Conveyordishwasher, title: "Conveyor Dishwasher" },
  { image: Dishlandingtable, title: "Dish Landing Table" },
  { image: Entrytablewithprerinseunit, title: "Entry Table with Pre-Rinse Unit" },
  { image: Glasswasher, title: "Glass Washer" },
  { image: Handwashbasin, title: "Hand Wash Basin" },
  { image: Hoodtypedishwasher, title: "Hood Type Dishwasher" },
  { image: Meatwashingtablewithsink, title: "Meat Washing Table with Sink" },
  { image: Potwashsink, title: "Pot Wash Sink" },
  { image: Singlepotwashsink, title: "Single Pot Wash Sink" },
  { image: Threesinkunit, title: "Three Sink Unit" },
  { image: Twosinkunit, title: "Two Sink Unit" },
  { image: Vegetablecleaningtablewithsinkstorage, title: "Vegetable Cleaning Table with Sink & Storage" },
  { image: Worktablewithsink, title: "Work Table with Sink" }
],

"Bar Units": [
  { image: Backbarcooler, title: "Back bar cooler" },
  { image: Barcounter, title: "Bar Counter" },
  { image: Bartenderblenderstation, title: "Bartender blender station" },
  { image: BartenderIcechest, title: "Bartender Ice Chest" },
  { image: Bartenderliquorstation, title: "Bartender liquor station" },
  { image: Bartenderwastebin, title: "Bartender waste bin" }
  
],

"Steam Equipments":[
  {image: GlassTypeDoubleJacketedVessel, title: "Glass Type Double Jacketed Vessel"},
  {image: IdlySteamer, title: "IdlySteamer"},
  {image: RiceCookingVessel, title: "Rice Cooking Vessel"},
  {image: SteamBoiler, title: "Steam Boiler"}
]
,
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

}



export default function ProductSection() {
  const [activeTab, setActiveTab] = useState("All");

  const displayedProducts =
  activeTab === "All"
    ? Object.values(productsData).flat()
    : productsData[activeTab] || [];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#F8FAFC] via-[#F0F4FA] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Hero Heading */}
        <motion.div
          className="mb-16 md:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center px-4 md:px-5 py-2 rounded-full border border-[#0057D9]/20 bg-white text-[#0057D9] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase shadow-sm">
            Bright Industries
          </span>

          <h1 className="mt-6 md:mt-8 text-[#0057D9] leading-[1.05] tracking-tight">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light">
              Professional Industrial 

            </span>

            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium">
               Kitchen Equipment
            </span>

            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light">
              Supplier Experts
            </span>
          </h1>

          <p className="mt-6 md:mt-8 max-w-4xl text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
            As a trusted commercial kitchen equipment supplier, we provide high-quality kitchen solutions designed
            for efficiency, durability, and seamless workflow. Our expert team delivers customized equipment,
            innovative layouts, and reliable support to help restaurants, hotels, and food businesses achieve
            smooth operations and long-term performance successfully.
          </p>
        </motion.div>

        {/* Section Heading */}
        <motion.div
          className="mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#B88E2F] font-semibold uppercase tracking-[0.25em] text-sm">
            Our Products
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Commercial Kitchen Systems
          </h2>

          <p className="mt-5 text-gray-600 text-sm md:text-base lg:text-lg max-w-3xl mx-auto">
            Transforming professional kitchens through smart innovation, seamless functionality, premium quality, and exceptional operational efficiency.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex md:flex-wrap overflow-x-auto md:overflow-visible gap-3 pb-4 md:pb-0 mb-12 md:mb-16 scrollbar-hide">
          {categories.map((category) => (
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ y: -2 }}
              key={category}
              onClick={() => setActiveTab(category)}
              className={`whitespace-nowrap px-5 md:px-7 py-2.5 md:py-3 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeTab === category
                    ? "bg-[#0057D9] text-white shadow-lg shadow-blue-200"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-[#0057D9] hover:text-[#0057D9]"
                }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Products */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8"
          >
           {displayedProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#0057D9]/10 shadow-sm hover:shadow-[0_25px_50px_-12px_rgba(0,87,217,0.20)] transition-all duration-500"
              >
                <div className="aspect-square bg-white flex items-center justify-center p-6 md:p-8">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    whileHover={{
                      scale: 1.08,
                      rotate: 2,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="relative p-4 md:p-5">
                  <div className="absolute top-0 left-6 right-6 h-[1px] bg-[#E2E8F0]" />

                  <h3 className="mt-4 text-base md:text-lg font-semibold text-gray-900 text-center">
                    {product.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
