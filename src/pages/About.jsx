import { Link } from "react-router-dom";
import { Target, Eye, Heart, Shield, Users, Leaf, Award, ArrowRight } from "lucide-react";
import { useState } from "react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const values = [
    { icon: <Shield className="w-8 h-8" />, title: "Safety", description: "We prioritize safety in all our operations and maintain the highest industry standards." },
    { icon: <Users className="w-8 h-8" />, title: "Customer Satisfaction", description: "Our customers are at the heart of everything we do. Your satisfaction is our success." },
    { icon: <Award className="w-8 h-8" />, title: "Integrity", description: "We operate with transparency and honesty in all our business dealings." },
    { icon: <Leaf className="w-8 h-8" />, title: "Environmental Responsibility", description: "Committed to sustainable practices that protect our environment for future generations." },
  ];

  const team = [
    { name: "Philip Elias", role: "Director", description: "With extensive experience in oil and gas downstream operations." },
    { name: "Philip Blessed", role: "Director", description: "Expert in supply contracts and regulatory compliance." },
    { name: "Lucky Nwode", role: "Director & Secretary", description: "Specializes in project management and business development." },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden min-h-[420px] flex items-center">
        {/* Background image (place your attached image at /about_hero.png) */}
        <div className="absolute inset-0">
          <img
            src="/about_img.png"
            alt="Eligas team"
            className="w-full h-full object-cover object-center-right"
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
            <span className="text-primary-foreground font-semibold text-lg mb-4 block animate-fade-up drop-shadow-md">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-up delay-100 drop-shadow-lg">
              Powering Nigeria's <span className="text-accent">Energy Future</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 animate-fade-up delay-200 drop-shadow-md">
              Eligas Energies Nigeria Limited is dedicated to providing safe, affordable, and reliable energy solutions across Nigeria — prioritizing oil, gas, and petroleum products while offering LPG as a complementary clean-fuel option.
            </p>
            <div className="mt-6 animate-fade-up delay-300">
              <Link to="/contact" className="btn-hero bg-secondary hover:bg-secondary/90 inline-flex items-center gap-3">
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-fade-up">
              <span className="text-primary font-semibold text-lg">Our Story</span>
              <h2 className="section-title mt-2 mb-6">Company Overview</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Eligas Energies Nigeria Limited was incorporated in 2023 with its registered address at 1, Suru Street, Okeira, Ogba, Lagos State, Nigeria. Our primary business focus encompasses the retail and distribution of oil & gas and petroleum products, with LPG available as a complementary offering through our state-of-the-art 2.5MT/day micro-bottling and distribution hub.
              </p>
              
              {isExpanded && (
                <>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    We are committed to providing clean, safe, and affordable energy solutions to households, estates, restaurants, small industries, and commercial establishments, while contributing significantly to Nigeria's clean energy transition agenda and energy security.
                  </p>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    With a seasoned management team possessing a combined experience of over ten (10) years in oil and gas downstream operations, energy product handling, supply contracts, and regulatory compliance, we are positioned to deliver operational excellence, safety, and reliability in comprehensive energy distribution.
                  </p>
                </>
              )}
              
              {!isExpanded && <span className="text-muted-foreground text-lg"></span>}
              
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                {isExpanded ? "See Less" : "See More"}
                <ArrowRight size={16} className={`transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`} />
              </button>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/About_overview.png"
                  alt="Eligas Operations"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, rgba(15, 28, 45, 0.3) 0%, rgba(15, 28, 45, 0.1) 100%)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-card p-10 rounded-2xl shadow-lg animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-secondary mb-4">Our Mission</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>To deliver excellence in oil, gas, and petroleum operations with uncompromising quality, safety, reliability, and efficiency.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>To stay competitive and achieve steady, profitable growth.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>To implement effective safety measures and uphold industry best practices.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>To guarantee steady and reliable availability of products.</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-secondary p-10 rounded-2xl shadow-lg animate-fade-up delay-100">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-secondary-foreground mb-4">Our Vision</h3>
                <p className="text-secondary-foreground/80 text-lg leading-relaxed mb-6">
                To champion cleaner energy adoption by providing safe and affordable oil, gas, and petroleum solutions, offering LPG as a complementary clean-fuel option to reduce dependence on firewood and deforestation for future generations.
              </p>
              <div className="flex items-center gap-3 text-primary font-semibold text-xl">
                <Heart className="w-6 h-6" />
                <span>Energy for you...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-lg">What We Stand For</span>
            <h2 className="section-title mt-2 mb-4">Our Core Values</h2>
            <p className="section-subtitle mx-auto">
              These principles guide everything we do at Eligas Energies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card-service text-center group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-secondary mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-lg">Leadership</span>
            <h2 className="section-title mt-2 mb-4">Management Team</h2>
            <p className="section-subtitle mx-auto">
              Our experienced leadership team brings over 10 years of combined expertise in the oil and gas sector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 rounded-full bg-secondary mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold text-secondary mb-1">{member.name}</h3>
                <span className="text-primary font-semibold text-sm block mb-4">{member.role}</span>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Partner With Us Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            We're looking for filling stations to partner with as fuel and distribution hubs (including LPG services where applicable).
          </p>
          <Link to="/contact" className="btn-hero bg-secondary hover:bg-secondary/90 inline-flex items-center gap-2">
            Reach Out to Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
