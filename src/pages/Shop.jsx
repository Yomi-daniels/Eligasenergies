import { useState } from "react";
import { Flame, RefreshCw, ShoppingBag, Truck, MessageCircle } from "lucide-react";
import OrderModal from "../components/OrderModal";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    {
      id: 1,
      category: "refill",
      name: "3kg Cylinder Refill",
      price: "₦2,500",
      description: "Quick refill for your 3kg LPG cylinder",
      image: "/3kg.png",
      icon: <Flame className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      id: 2,
      category: "refill",
      name: "6kg Cylinder Refill",
      price: "₦5,000",
      description: "Standard refill for your 6kg LPG cylinder",
      image: "/6kg.png",
      icon: <Flame className="w-6 h-6 sm:w-8 sm:h-8 " />,
    },
    {
      id: 3,
      category: "refill",
      name: "12.5kg Cylinder Refill",
      price: "₦10,000",
      description: "Full refill for your 12.5kg LPG cylinder",
      image: "/12.5kg.png",
      icon: <Flame className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      id: 4,
      category: "refill",
      name: "25kg Cylinder Refill",
      price: "₦20,000",
      description: "Commercial refill for your 25kg LPG cylinder",
      image: "/25kg.png",
      icon: <Flame className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      id: 5,
      category: "refill",
      name: "50kg Cylinder Refill",
      price: "₦40,000",
      description: "Industrial refill for your 50kg LPG cylinder",
      image: "/50kg.png",
      icon: <Flame className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      id: 6,
      category: "exchange",
      name: "6kg Cylinder Exchange",
      price: "₦5,500",
      description: "Exchange your empty 6kg cylinder for a filled one",
      image: "/6kg.png",
      icon: <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      id: 7,
      category: "exchange",
      name: "12.5kg Cylinder Exchange",
      price: "₦11,000",
      description: "Exchange your empty 12.5kg cylinder for a filled one",
      image: "/12.5kg.png",
      icon: <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      id: 8,
      category: "purchase",
      name: "New 3kg Cylinder + Gas",
      price: "₦8,000",
      description: "Brand new 3kg cylinder with full gas",
      image: "/3kg.png",
      icon: <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      id: 9,
      category: "purchase",
      name: "New 6kg Cylinder + Gas",
      price: "₦15,000",
      description: "Brand new 6kg cylinder with full gas",
      image: "/6kg.png",
      icon: <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      id: 10,
      category: "purchase",
      name: "New 12.5kg Cylinder + Gas",
      price: "₦28,000",
      description: "Brand new 12.5kg cylinder with full gas",
      image: "/12.5kg.png",
      icon: <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      id: 11,
      category: "rental",
      name: "6kg Cylinder Rental",
      price: "₦500/week",
      description: "Rent a 6kg cylinder for your temporary needs",
      image: "/6kg.png",
      icon: <Truck className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      id: 12,
      category: "rental",
      name: "12.5kg Cylinder Rental",
      price: "₦800/week",
      description: "Rent a 12.5kg cylinder for your temporary needs",
      image: "/12.5kg.png",
      icon: <Truck className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
  ];

  const categories = [
    { id: "all", name: "All Products" },
    { id: "refill", name: "Gas Refills" },
    { id: "exchange", name: "Cylinder Exchange" },
    { id: "purchase", name: "Buy Cylinders" },
    { id: "rental", name: "Cylinder Rental" },
  ];

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleOrder = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const depots = [
    { name: "Ogba Depot", address: "1, Suru Street, Okeira, Ogba, Lagos", status: "Open" },
    { name: "Ikeja Depot", address: "Coming Soon", status: "Coming Soon" },
    { name: "Lekki Depot", address: "Coming Soon", status: "Coming Soon" },
  ];

  return (
    <>
      {/* Order Modal */}
      <OrderModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/order.png"
            alt="Shop hero"
            className="w-full h-full object-cover  object-right-top "
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, hsl(var(--primary) / 2.32) 0%, hsl(var(--primary) / 0.23) 65%), radial-gradient(circle at 12% 50%, rgba(0,0,0,0.16), rgba(0,0,0,0) 40%)",
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary-foreground font-semibold text-base sm:text-lg mb-2 sm:mb-4 block animate-fade-up">Shop</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4 sm:mb-6 animate-fade-up delay-100">
              Order Your <span className="text-accent">LPG Gas</span> Today
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/80 max-sm:text-white animate-fade-up delay-200">
              Browse our products and place your order via WhatsApp. Fast delivery guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-4 sm:py-6 lg:py-8 bg-muted sticky top-16 sm:top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-foreground hover:bg-primary/10"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-10 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border group animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}>

                {/* Product Image */}

                <div className="relative w-full h-32 sm:h-40 bg-white overflow-hidden group-hover:opacity-90 transition-opacity">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 sm:mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {product.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-heading font-bold text-secondary mb-1 sm:mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">{product.description}</p>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-lg sm:text-2xl font-bold text-primary">{product.price}</span>
                    <button
                      onClick={() => handleOrder(product)}
                      className="flex items-center gap-1 sm:gap-2 bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm"
                    >
                      <MessageCircle size={16} />
                      <span>Order</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depot Locations */}
      <section className="py-10 sm:py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            <span className="text-primary font-semibold text-base sm:text-lg">Our Locations</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-secondary mt-2 mb-3 sm:mb-4">Filling Depots</h2>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mx-auto">
              Visit any of our depots for cylinder refills and exchanges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {depots.map((depot, index) => (
              <div
                key={index}
                className="bg-card p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 ${
                  depot.status === "Open" ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"
                }`}>
                  <span className={`w-2 h-2 rounded-full ${depot.status === "Open" ? "bg-green-500" : "bg-muted-foreground"}`} />
                  {depot.status}
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-secondary mb-2">{depot.name}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{depot.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Process */}
      <section className="py-10 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            <span className="text-primary font-semibold text-base sm:text-lg">How to Order</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-secondary mt-2 mb-3 sm:mb-4">Simple Ordering Process</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Choose Product", description: "Select the product you need from our catalog." },
              { step: "2", title: "Fill Details", description: "Enter your name, address and delivery preferences." },
              { step: "3", title: "Send via WhatsApp", description: "Your order details are sent to us instantly." },
              { step: "4", title: "Get Delivery", description: "Receive your order at your doorstep." },
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-primary text-primary-foreground text-lg sm:text-xl lg:text-2xl font-bold flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  {item.step}
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-heading font-bold text-secondary mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4 sm:mb-6">
            Need Help With Your Order?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contact us on WhatsApp or call us directly. We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/2349076412314?text=Hello! I need help with placing an order."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero bg-green-500 hover:bg-green-600 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
            <a
              href="tel:08133972958"
              className="btn-hero bg-secondary hover:bg-secondary/90 text-sm sm:text-base"
            >
              Call: 0813 397 2958
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
