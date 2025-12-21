import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "./NavLink";
import { Menu, X, Phone, Mail } from "lucide-react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
  ];

  

  const handleNavClick = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Top Bar */}
      {/* <div className="bg-secondary text-secondary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:08133972958" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} />
              <span>0813 397 2958</span>
            </a>
            <a href="mailto:Info.eligas@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} />
              <span>Info.eligas@gmail.com</span>
            </a>
          </div>
          <div className="text-primary font-semibold">
            Energy for you...
          </div>
        </div>
      </div> */}

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black backdrop-blur-md shadow-lg" : "bg-[#000000ec] "
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16 sm:h-20 pr-12">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3" onClick={handleNavClick}>
              <div className="w-[120px] h-10 pt-4 relative flex items-center justify-center">
                {/* <span className="text-primary-foreground font-bold text-lg sm:text-xl">ee</span> */}
                <img src="/logo.png" alt="Eligas Energies Logo" className="w-[120px] h-[100px] object-contain" />
              </div>
              {/* <div className="hidden xs:block">
                <span className="text-primary font-heading font-bold text-base sm:text-xl">Eligas</span>
                <span className="text-secondary font-heading font-bold text-base sm:text-xl">Energies</span>
              </div> */}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="nav-link text-sm capitalize tracking-normal text-white font-normal"
                  activeClassName="text-primary font-bold"
                  onClick={handleNavClick}
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/shop"
                className="capitalize text-white btn-hero p-2 rounded-md text-sm tracking-normal"
                onClick={handleNavClick}
              >
                Order Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white hover:text-white transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}>
          <div className="bg-black border-t border-border py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="block px-6 py-3 text-sm uppercase text-white tracking-wider transition-colors"
                activeClassName="text-primary bg-primary/5"
                onClick={handleNavClick}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="px-6 py-3">
              <Link
                to="/shop"
                className="btn-primary block text-center text-sm uppercase tracking-wider"
                onClick={handleNavClick}
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
