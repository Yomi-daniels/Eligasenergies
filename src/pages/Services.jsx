import { Link } from "react-router-dom";
import { Flame, Truck, RefreshCw, ShoppingBag, Home, Building, ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Flame className="w-12 h-12" />,
      title: "Refilling & Distribution",
      description: "Quick and safe refilling and distribution services for petroleum products and LPG. We handle cylinders and bulk supply with precision and care.",
      features: ["All cylinder sizes", "Quality assured gas", "Competitive pricing", "Quick turnaround"],
    },
    {
      icon: <RefreshCw className="w-12 h-12" />,
      title: "Cylinder Exchange Program",
      description: "Exchange your empty cylinder for a pre-filled one instantly at our hub. No waiting, no hassle - just swap and go.",
      features: ["Instant exchange", "Pre-filled cylinders", "Quality checked", "Multiple locations"],
    },
    {
      icon: <ShoppingBag className="w-12 h-12" />,
      title: "Petroleum Products Supply",
      description: "Supply of quality petroleum products including kerosene, diesel, and other fuel products for residential and commercial use.",
      features: ["Quality assured", "Various quantities", "Competitive rates", "Reliable delivery"],
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: "Oil & Gas Solutions",
      description: "Comprehensive oil and gas distribution services tailored for industrial, commercial, and residential applications.",
      features: ["Industrial grade", "Custom solutions", "Bulk supply", "Expert support"],
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Door-to-Door Delivery",
      description: "Convenient doorstep delivery service. We bring energy products right to your home, estate, or business location anywhere in Lagos.",
      features: ["Doorstep delivery", "Scheduled delivery", "Same-day service", "Lagos-wide coverage"],
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Bulk Commercial Supply",
      description: "Bulk energy supply for restaurants, hotels, industries, and businesses. Reliable supply chain for all your operational needs.",
      features: ["Bulk supply", "Reliable delivery", "Business accounts", "Custom solutions"],
    },
  ];

  const customerSegments = [
    {
      title: "Households & Estates",
      description: "Safe and affordable cooking gas solutions for residential use.",
      icon: <Home className="w-8 h-8" />,
    },
    {
      title: "Restaurants & Hotels",
      description: "Reliable fuel supply to power your commercial kitchen operations.",
      icon: <Building className="w-8 h-8" />,
    },
    {
      title: "Small Industries",
      description: "Industrial-grade energy solutions for manufacturing and production.",
      icon: <Flame className="w-8 h-8" />,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden min-h-[420px] flex items-center">
        {/* Background image — place your image at /services_hero.png */}
        <div className="absolute inset-0">
          <img
            src="/services.png"
            alt="Eligas services"
            className="w-full h-full object-cover object-right"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, hsl(var(--primary) / 2.32) 0%, hsl(var(--primary) / 0.23) 65%), radial-gradient(circle at 12% 50%, rgba(0,0,0,0.16), rgba(0,0,0,0) 40%)",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <span className="text-primary-foreground font-semibold text-lg mb-4 block animate-fade-up drop-shadow-md">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-up delay-100 drop-shadow-lg">
              Comprehensive <span className="text-accent">Energy Solutions</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 animate-fade-up delay-200 drop-shadow-md">
              From oil, gas, and petroleum distribution to LPG services, we provide end-to-end energy solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold text-secondary mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Segments */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-lg">Who We Serve</span>
            <h2 className="section-title mt-2 mb-4">Our Customers</h2>
            <p className="section-subtitle mx-auto">
              We cater to diverse customer segments with tailored energy solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {customerSegments.map((segment, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                  {segment.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-secondary mb-3">{segment.title}</h3>
                <p className="text-muted-foreground">{segment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-lg">How We Work</span>
            <h2 className="section-title mt-2 mb-4">Our Process</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Bulk Procurement", description: "Fuel and petroleum products purchased in bulk and stored at our micro-terminal." },
              { step: "02", title: "Micro-Bottling", description: "Products filled into smaller dispensable units or cylinders for varied customer needs." },
              { step: "03", title: "Cylinder Exchange", description: "Customers exchange empty cylinders for pre-filled ones when applicable." },
              { step: "04", title: "Last-Mile Delivery", description: "Direct delivery to homes, estates, and businesses." },
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-6xl font-heading font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-heading font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Visit our shop to place your order or contact us on WhatsApp for quick service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/shop" className="btn-hero bg-secondary hover:bg-secondary/90 inline-flex items-center gap-2">
              Shop Now <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/2349076412314?text=Hello! I'm interested in your energy services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero bg-green-500 hover:bg-green-600"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
