import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBg from "/Hero_img1.png";
import heroBg2 from "/Hero_img2.png";
import heroBg3 from "/Hero_img3.png";

const slides = [
  {
    id: 1,
    title: "Energy for You",
    subtitle: "Clean & Affordable LPG Solutions",
    description: "Championing cleaner energy adoption across Nigeria with safe, reliable LPG distribution services.",
    cta: "Learn More",
    link: "/about",
    image: heroBg,
  },
  {
    id: 2,
    title: "Quality Service",
    subtitle: "Your Trusted LPG Partner",
    description: "We deliver excellence in LPG operations with uncompromising quality, safety, and reliability.",
    cta: "Our Services",
    link: "/services",
    image: heroBg2,
  },
  {
    id: 3,
    title: "Order Today",
    subtitle: "Fast & Reliable Delivery",
    description: "Cylinder refills, exchanges, and home delivery services available at your convenience.",
    cta: "Shop Now",
    link: "/shop",
    image: heroBg3,
},
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[80vh] sm:h-[90vh] lg:h-[100vh] min-h-[500px] sm:min-h-[550px] lg:min-h-[600px] overflow-hidden px-6">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentSlide ? "active" : "inactive"}`}
        >
          {/* Full image element so it always fills the slider area */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Separate overlay for easier control over gradient and opacity */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to right, rgba(0,50,70,0.9), rgba(0,80,100,0.25))",
              }}
            />
          </div>
        </div>
      ))}

      {/* Animated gas cylinders decoration */}
      <div className="absolute left-4 bottom-20 opacity-20 animate-float hidden lg:block">
        <div className="w-24 h-40 rounded-t-full bg-primary/40" />
      </div>
      <div className="absolute right-4 bottom-32 opacity-20 animate-float delay-300 hidden lg:block">
        <div className="w-20 h-36 rounded-t-full bg-primary/40"/>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-1000 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 absolute"
                }`}
              >
                {index === currentSlide && (
                  <>
                    <span className="inline-block text-primary font-semibold text-sm sm:text-base lg:text-lg mb-2 sm:mb-4 animate-fade-up drop-shadow-md">
                      {slide.subtitle}
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold text-primary-foreground mb-4 sm:mb-6 animate-fade-up delay-100 tracking-tight drop-shadow-2xl">
                      {slide.title}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/95 mb-6 sm:mb-8 max-w-2xl leading-relaxed animate-fade-up delay-200 drop-shadow-lg">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-up delay-300">
                      <Link to={slide.link} className="btn-hero text-center text-sm sm:text-base shadow-2xl">
                        {slide.cta}
                      </Link>
                      <Link to="/contact" className="btn-hero bg-transparent border-2 border-primary-foreground hover:bg-primary-foreground hover:text-secondary text-center text-sm sm:text-base shadow">
                        Contact Us
                      </Link>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Bottom Center */}
      <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        <button
          onClick={prevSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary border-2 border-primary-foreground text-primary-foreground flex items-center justify-center transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary border-2 border-primary-foreground text-primary-foreground flex items-center justify-center transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary w-10 sm:w-16" : "bg-primary-foreground/40 w-6 sm:w-12"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
