import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import kitchen from "../../assets/logo/kitchen.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Our Profile", path: "/profile" },
    { name: "Services", path: "/services" },
    { name: "Consultant", path: "/consultant" },
  ];

  return (
    <header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-[#0b1f33]/90 backdrop-blur-xl shadow-lg"
      : "bg-transparent"
  }`}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-[80px] lg:h-[100px]">
      
      {/* Logo */}
      <NavLink to="/" className="flex-shrink-0">
        <img
          src={kitchen}
          alt="Bright Industries"
          className="h-10 sm:h-12 md:h-14 lg:h-20 w-auto"
        />
      </NavLink>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center justify-center flex-1 px-6">
        <div
          className={`flex items-center gap-6 xl:gap-8 px-6 xl:px-8 py-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg"
              : "bg-white/10 backdrop-blur-lg border border-white/20"
          }`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm xl:text-base transition-all duration-300 ${
                  isActive
                    ? "text-[#1EA7FF] font-semibold"
                    : "text-white hover:text-[#1EA7FF]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Desktop CTA */}
      <div className="hidden lg:flex flex-shrink-0">
        <NavLink
          to="/contact"
          className="inline-flex items-center justify-center px-5 xl:px-6 py-3 rounded-full bg-[#1EA7FF] text-white font-semibold shadow-lg hover:bg-[#0d8ae0] hover:shadow-xl transition-all duration-300 whitespace-nowrap"
        >
          Enquire Us
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? (
          <X size={28} />
        ) : (
          <Menu size={28} />
        )}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  <div
    className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 ${
      menuOpen
        ? "opacity-100 visible translate-y-0"
        : "opacity-0 invisible -translate-y-2"
    }`}
  >
    <div className="mx-4 mt-2 bg-[#0b1f33]/95 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">
      <div className="flex flex-col gap-5">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-[#1EA7FF] font-semibold"
                : "text-white hover:text-[#1EA7FF]"
            }
          >
            {link.name}
          </NavLink>
        ))}

        <NavLink
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className="mt-2 text-center bg-[#1EA7FF] text-white py-3 rounded-xl font-medium hover:bg-[#0d8ae0] transition-all duration-300"
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