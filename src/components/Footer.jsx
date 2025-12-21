import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              {/* <div className="relative w-40 h-40 sm:w-20 sm:h-20  flex items-center justify-center">
              <img src="/logo.png" alt="" className="w-full h-full"/>
              </div> */}
              <div className="text-4xl relative ">
                <span className="text-primary font-heading font-bold max-sm:text-3xl">Eligas</span>
                <span className="text-secondary-foreground font-heading font-bold  max-sm:text-3xl">Energies</span>
              </div>
            </div>
            <p className="text-secondary-foreground/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Championing cleaner energy adoption by providing safe and affordable LPG solutions across Nigeria.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/20 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-heading font-bold mb-4 sm:mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li><Link to="/" className="text-secondary-foreground/80 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-secondary-foreground/80 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/shop" className="text-secondary-foreground/80 hover:text-primary transition-colors">Shop</Link></li>
              <li><Link to="/contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-heading font-bold mb-4 sm:mb-6 text-primary">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li><Link to="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Cylinder Refills</Link></li>
              <li><Link to="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Cylinder Exchange</Link></li>
              <li><Link to="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Cylinder Sales</Link></li>
              <li><Link to="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Cylinder Rental</Link></li>
              <li><Link to="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Home Delivery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-heading font-bold mb-4 sm:mb-6 text-primary">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-1 sm:w-5 sm:h-5" />
                <span className="text-secondary-foreground/80">1, Suru Street, Okeira, Ogba, Lagos State, Nigeria</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone size={18} className="text-primary shrink-0 sm:w-5 sm:h-5" />
                <div className="text-secondary-foreground/80">
                  <a href="tel:08133972958" className="hover:text-primary transition-colors block">0813 397 2958</a>
                  <a href="tel:07051922216" className="hover:text-primary transition-colors block">0705 192 2216</a>
                </div>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail size={18} className="text-primary shrink-0 sm:w-5 sm:h-5" />
                <a href="mailto:Info.eligas@gmail.com" className="text-secondary-foreground/80 hover:text-primary transition-colors break-all">Info.eligas@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-xs sm:text-sm text-secondary-foreground/60 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Eligas Energies Nigeria Limited. All rights reserved.</p>
            <p className="text-primary font-semibold">Energy for you...</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
