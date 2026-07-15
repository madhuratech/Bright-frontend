import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import logo from "../../assets/logo/BrightInd.svg";

const Footer = () => {
  return (
    <footer className="bg-[#F0F4FA] py-8 sm:py-10 px-3 sm:px-6 lg:px-10">
      <div className="max-w-[1600px] mx-auto bg-[#F7F7F7] rounded-[20px] sm:rounded-[28px] px-5 sm:px-8 lg:px-14 py-8 sm:py-10 shadow-sm">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">

          {/* Left Content */}
          <div>
            <img
              src={logo}
              alt="Bright Industries Logo"
              className="w-[160px] sm:w-[190px] lg:w-[220px] h-auto object-contain mb-5"
            />

            <p className="text-[#6B6B6B] text-sm sm:text-[15px] leading-6 max-w-full sm:max-w-[320px]">
              Delivering customized commercial kitchen and stainless steel fabrication solutions built to enhance efficiency, 
              maintain quality standards, and support long-term operational success. 
            </p>

           
            
          </div>

          {/* Equipment */}
          <div>
            <h3 className="text-[#1D1D1D] font-semibold text-lg sm:text-xl lg:text-[22px] mb-4 sm:mb-5">
              Equipment
            </h3>

            <ul className="space-y-3 sm:space-y-4 text-[#6B6B6B] text-sm sm:text-base">
              <li>Steam Equipment</li>
              <li>Cooking Equipment</li>
              <li>Preparation Equipment</li>
              <li>Bakery Equipment</li>
            </ul>
          </div>

          {/* Industrial Solutions */}
          <div>
            <h3 className="text-[#1D1D1D] font-semibold text-lg sm:text-xl lg:text-[22px] mb-4 sm:mb-5">
              Industrial Solutions
            </h3>

            <ul className="space-y-3 sm:space-y-4 text-[#6B6B6B] text-sm sm:text-base">
              <li>Exhaust Systems</li>
              <li>Washing Equipment</li>
              <li>SS Fabrication</li>
              <li>Service Equipment</li>
              <li>Turnkey Kitchen Projects</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#1D1D1D] font-semibold text-lg sm:text-xl lg:text-[22px] mb-4 sm:mb-5">
              Contact Us
            </h3>

            <div className="space-y-5">

              {/* Address */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="min-w-[38px] h-[38px] sm:min-w-[42px] sm:h-[42px] rounded-full bg-[#0057C8] flex items-center justify-center text-white">
                  <FaMapMarkerAlt />
                </div>

                <p className="text-[#6B6B6B] text-sm sm:text-[15px] leading-6">
                  286/1, Vivekandhar Street, NKT Nagar, Nanjekoundenpudur, G.N.Mills Post, Coimbatore-641029.
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="min-w-[38px] h-[38px] sm:min-w-[42px] sm:h-[42px] rounded-full bg-[#0057C8] flex items-center justify-center text-white">
                  <FaPhoneAlt />
                </div>

                <div className="text-[#6B6B6B] text-sm sm:text-[15px] leading-6">
                  <p>+91 9894788786</p>
                  <p>+91 9944746786</p>
                  <p>+91 9944749786</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="min-w-[38px] h-[38px] sm:min-w-[42px] sm:h-[42px] rounded-full bg-[#0057C8] flex items-center justify-center text-white">
                  <FaEnvelope />
                </div>

                <p className="text-[#6B6B6B] text-sm sm:text-[15px] leading-6 break-all">
                 bright_ind@hotmail.com <br/>
                  brightcommercialkitchen@gmail.com
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#D8D8D8] mt-8 sm:mt-10 pt-5 sm:pt-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">

          <p className="text-[#7A7A7A] text-xs sm:text-sm text-center md:text-left">
            © 2026 Bright Industries. All Rights Reserved.
          </p>

          <p className="text-[#7A7A7A] text-xs sm:text-sm text-center md:text-right">
            Designed & Developed by{" "}
            <a
              href="https://madhuratech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0057C8] hover:underline transition-all duration-300"
            >
              Madhura Technologies
            </a>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;