import { Link } from "react-router-dom";
import { Flame, Truck, Shield, Users, CheckCircle, ArrowRight } from "lucide-react";
import HeroSlider from "../components/HeroSlider";
import CounterStat from "../components/CounterStat";

const Home = () => {
  const services = [
    {
      icon: <Flame className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Oil, Gas & Petroleum Distribution",
      description: "Bulk and retail supply of petroleum products, oil & gas solutions, and LPG as a complementary clean-fuel option.",
    },
    {
      icon: <Truck className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Bulk Energy Supply",
      description: "Bulk supply of petroleum products, fuel, and energy solutions for commercial and industrial customers.",
    },
    {
      icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Safe Energy Solutions",
      description: "Certified and quality-assured energy products with full compliance to safety and regulatory standards.",
    },
    {
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support and emergency energy supply services for all clients.",
    },
  ];

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "2.5MT", label: "Daily Capacity" },
    { value: "1000+", label: "Happy Customers" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <>
      <HeroSlider />

      {/* About Section */}
      <section className="py-10 sm:py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="animate-fade-up">
              <span className="text-primary font-semibold text-base sm:text-lg">Who We Are</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-secondary mt-2 mb-4 sm:mb-6">
                We Are <span className="text-primary">Value Driven</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
                Eligas Energies Nigeria Limited is a company incorporated in 2023, specializing in the retail and distribution of energy products — primarily oil, gas, and petroleum products — with LPG offered as a complementary clean-fuel option through our state-of-the-art 2.5MT/day micro-bottling and distribution hub in Lagos State.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
                We are committed to providing clean, safe, and affordable energy solutions to households, estates, restaurants, small industries, and commercial establishments, while actively contributing to Nigeria's clean energy transition agenda and energy security.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {["Safety First Approach", "Quality Assurance", "Affordable Pricing", "Reliable Service"].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 sm:gap-3 text-foreground text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-primary inline-flex items-center gap-2 text-sm sm:text-base">
                Learn More <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </Link>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/experience.png"
                  alt="Energy Distribution Hub"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 bg-primary text-primary-foreground p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-xl">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading">10+</div>
                <div className="text-xs sm:text-sm opacity-90">Years Combined Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            <span className="text-primary font-semibold text-base sm:text-lg">What We Offer</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-secondary mt-2 mb-3 sm:mb-4">Our Services</h2>
              <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mx-auto">
              We provide comprehensive energy solutions prioritizing oil, gas, and petroleum products, with LPG available as a complementary option to meet your energy needs safely and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-service group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 sm:mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-secondary mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link to="/services" className="btn-outline inline-flex items-center gap-2 text-sm sm:text-base">
              View All Services <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 sm:py-16 lg:py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <CounterStat key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-10 sm:py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative animate-slide-in-left">
              <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
                  alt="Clean Energy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-fade-up">
              <span className="text-primary font-semibold text-base sm:text-lg">Our Vision</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-secondary mt-2 mb-4 sm:mb-6">
                We <span className="text-primary">Believe</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
                To champion cleaner energy adoption by providing safe and affordable oil, gas, and petroleum solutions, while offering LPG as a complementary clean-fuel option to reduce dependence on firewood and deforestation for future generations.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-secondary mb-1 text-sm sm:text-base">Safety First</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">Implementing effective safety measures and upholding industry best practices.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-secondary mb-1 text-sm sm:text-base">Customer Satisfaction</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">Delivering excellence in operations with reliable and efficient service.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4 sm:mb-6">
            Ready to Switch to Clean Energy?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contact us today for affordable oil, gas, and petroleum solutions — LPG is available as a complementary option. We deliver quality service right to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link to="/shop" className="btn-hero bg-secondary hover:bg-secondary/90 text-sm sm:text-base">
              Order Now
            </Link>
            <Link to="/contact" className="btn-hero bg-transparent border-2 border-primary-foreground text-sm sm:text-base">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
