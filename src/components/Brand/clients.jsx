import left from "../../assets/clients/left.svg";
import right from "../../assets/clients/right.svg";

// Client Logos
import Aariyaas from "../../assets/clients/Aariyaas.png"
import Abbirami from "../../assets/clients/Abbirami.png"
import anandhaasrestaurant from "../../assets/clients/anandhaasrestaurant.png"
import AnandhaasBakery from "../../assets/clients/AnandhaasBakery.png"
import Aroma from "../../assets/clients/Aroma.png"
import Breeze from "../../assets/clients/Breeze.png"
import CityBakery from "../../assets/clients/CityBakery.jpg"
import CovaiAnganam from "../../assets/clients/CovaiAnganam.png"
import chennaiBakes from "../../assets/clients/chennaiBakes.jpg"
import HotelAnand from "../../assets/clients/HotelAnand.png"
import HotelAryaas from "../../assets/clients/HotelAryaas.png"
import HotelGowrikrishna from "../../assets/clients/HotelGowrikrishna.png"
import HotelHari from "../../assets/clients/HotelHari.jpg"
import HotelRaamus from "../../assets/clients/HotelRaamus.png"
import kasthuri from "../../assets/clients/kasthuri.jpg"
import Kings from "../../assets/clients/Kings.png"
import kmch from "../../assets/clients/kmch.png"
import Krishna from "../../assets/clients/Krishna.png"
import MSon from "../../assets/clients/MSon.png"
import Ragam from "../../assets/clients/Ragam.png"
import SaravanBhavan from "../../assets/clients/SaravanBhavan.png"
import SitaPaani from "../../assets/clients/SitaPaani.jpg"
import Sreesubbu from "../../assets/clients/Sreesubbu.jpg"
import StarBriyani from "../../assets/clients/StarBriyani.png"
import swami from "../../assets/clients/swami.png"
import venco from "../../assets/clients/venco.webp"
import Vidhya from "../../assets/clients/Vidhya.png"
import Shanthi from "../../assets/clients/Shanthi.jpg"
import ab from "../../assets/clients/ab.jpg"
import Kumaran from "../../assets/clients/Kumaran.png"
import Lt from "../../assets/clients/LT.png"
import skm from "../../assets/clients/skm.jpeg"
import Nutrena from "../../assets/clients/Nutrena.png"
import IB from "../../assets/clients/IB.png"
import Kathirform from "../../assets/clients/Kathirfarm.jpg"


const logos = [
  kmch,
  Lt,
  SaravanBhavan,
  HotelAryaas,
  anandhaasrestaurant,
  Aariyaas,
  Shanthi,
  Kumaran,
  Nutrena,
  skm,
  venco,
  IB,
  HotelGowrikrishna,
  HotelHari,
  HotelRaamus,
  HotelAnand,
  Abbirami,
  AnandhaasBakery,
  chennaiBakes,
  CityBakery,
  Aroma,
  Breeze,
  CovaiAnganam,
  Kathirform,
  Sreesubbu,
  StarBriyani,
  SitaPaani,
  Krishna,
  MSon,
  kasthuri,
  Kings,
  Vidhya,
  swami,
  ab,
  Ragam,

];

const ClientsSection = () => {
  return (
    <section className="bg-[#F0F4FA] py-16 sm:py-20 px-4 sm:px-6 lg:px-10">
      <div
        className="
          relative 
          max-w-[1700px] 
          mx-auto 
          rounded-[36px] 
          overflow-hidden
          bg-[#FAFAFA]
          px-6 sm:px-10 lg:px-16 xl:px-24
          py-14 sm:py-16 lg:py-20
        "
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg,#f5f5f5 0,#f5f5f5 2px,#fafafa 2px,#fafafa 6px)",
        }}
      >
        {/* Left Design */}
        <img
          src={left}
          alt="left design"
          className="hidden xl:block absolute left-2 bottom-16 w-24"
        />

        {/* Right Design */}
        <img
          src={right}
          alt="right design"
          className="hidden xl:block absolute right-1 bottom-20 w-24"
        />

        {/* Heading */}
        <div className="text-center max-w-5xl mx-auto">
          <span
            className="
              inline-flex items-center justify-center
              px-5 py-2 rounded-full
              bg-[#0E5CC8]/10 text-[#0E5CC8]
              text-sm font-semibold tracking-wide mb-5
            "
          >
            OUR CLIENTS
          </span>

          <h2
            className="
              text-[#0E5CC8]
              text-3xl sm:text-4xl lg:text-[52px]
              font-semibold leading-[1.15]
            "
          >
            Trusted by Businesses
            <br />
            That Demand Excellence
          </h2>

          <p
            className="
              mt-6 text-[#555]
              text-sm sm:text-base lg:text-[17px]
              leading-relaxed max-w-4xl mx-auto
            "
          >
            We partner with organizations across multiple industries,
            delivering dependable kitchen infrastructure and fabrication
            solutions that combine quality craftsmanship, reliable
            performance, and lasting value.
          </p>
        </div>

        {/* Logos */}
        <div className="mt-16 sm:mt-20">
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5
              gap-y-10
              sm:gap-y-12
              gap-x-6
              sm:gap-x-8
              lg:gap-x-10
              place-items-center
            "
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className="
                  w-full
                  h-[140px]
                  sm:h-[155px]
                  flex items-center justify-center
                  rounded-2xl
                  bg-white
                  border border-[#EAEAEA]
                  shadow-sm
                  px-6 sm:px-8
                  transition-all duration-300
                  hover:shadow-lg hover:-translate-y-1
                "
              >
                <img
                  src={logo}
                  alt={`client-${index + 1}`}
                  className="
                    max-h-[110px]
                    sm:max-h-[125px]
                    w-auto
                    object-contain
                    transition-all duration-300
                    hover:scale-105
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;