import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import kitchen from "../../assets/logo/kitchen.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productLinks = [
    {
      name: "Arabian Food Machinery",
      path: "/arabianFoodmachinery",
    },
    {
      name: "Bar Counter",
      path: "/barCounter",
    },
    {
      name: "Cooking Equipment",
      path: "/cookingEquipment",
    },
    {
      name: "Display Counter",
      path: "/displayEquipment",
    },
    {
      name: "Exhaust Equipment",
      path: "/exhaustEquipment",
    },
    {
      name: "Preparation Equipment",
      path: "/preparationEquipment",
    },
    {
      name: "Steam Equipment",
      path: "/steamEquipment",
    },
    {
      name: "Service Equipment",
      path: "/serviceEquipment",
    },
    {
      name: "Washing Equipment",
      path: "/washingEquipment",
    },


  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Profile", path: "/profile" },
    { name: "Services", path: "/services" },
    { name: "Consultant", path: "/consultant" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-[#0b1f33]/90 backdrop-blur-xl shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[85px] lg:h-[100px]">
          {/* Logo */}
          <NavLink to="/">
            <img
              src={kitchen}
              alt="Bright Industries"
              className="h-12 lg:h-20 w-auto"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-all duration-300 ${isActive
                  ? "text-[#1EA7FF] font-semibold"
                  : "text-white hover:text-[#1EA7FF]"
                }`
              }
            >
              Home
            </NavLink>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-white hover:text-[#1EA7FF] transition-all duration-300" onClick={() => navigate("/products")}>
                Products
                <ChevronDown
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </button>

              {/* Products Dropdown */}
              <div className="absolute left-1/2 top-full z-50 mt-4 w-[500px] -translate-x-1/2 rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl opacity-0 invisible translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">

                {/* Heading */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Our Products
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Commercial Kitchen Equipment
                  </p>
                </div>

                {/* Product Links */}
                <div className="grid grid-cols-2 gap-2">
                  {productLinks.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-[#F0F7FF] hover:text-[#0057D9]"
                    >
                      {item.name}

                      <span className="text-gray-400 text-xs">→</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Remaining Links */}
            {navLinks.slice(1).map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `transition-all duration-300 ${isActive
                    ? "text-[#1EA7FF] font-semibold"
                    : "text-white hover:text-[#1EA7FF]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <NavLink
              to="/contact"
              className="px-6 py-3 rounded-full bg-[#1EA7FF] text-white font-semibold shadow-lg hover:bg-[#0d8ae0] transition-all duration-300"
            >
              Enquire Us
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 ${menuOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible -translate-y-2"
          }`}
      >
        <div className="mx-4 mt-2 rounded-2xl bg-[#0b1f33]/95 backdrop-blur-xl border border-white/20 p-6 shadow-xl">
          <div className="flex flex-col gap-5">

            {/* Home */}
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-white"
            >
              Home
            </NavLink>

            {/* Products Heading */}
            <h3 className="text-[#1EA7FF] font-semibold text-lg">
              Products
            </h3>

            {/* All Products */}
            <div className="ml-2 flex flex-col gap-3">
              {productLinks.map((product) => (
                <NavLink
                  key={product.name}
                  to={product.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-[#1EA7FF] transition-all duration-300"
                >
                  {product.name}
                </NavLink>
              ))}
            </div>

            {/* Remaining Links */}
            {navLinks.slice(1).map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-[#1EA7FF]"
              >
                {link.name}
              </NavLink>
            ))}

            {/* Contact */}
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center rounded-xl bg-[#1EA7FF] py-3 text-white font-medium hover:bg-[#0d8ae0] transition-all duration-300"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;