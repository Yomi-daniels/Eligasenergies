import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `
*New Enquiry from Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject}

*Message:*
${formData.message}
    `.trim();
    
    const whatsappUrl = `https://wa.me/2349076412314?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your message will be sent via WhatsApp for faster response.",
    });
    
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["0813 397 2958", "0705 192 2216"],
      action: "tel:08133972958",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["Info.eligas@gmail.com"],
      action: "mailto:Info.eligas@gmail.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["1, Suru Street, Okeira,", "Ogba, Lagos State, Nigeria"],
      action: "https://maps.google.com/?q=Ogba,Lagos",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon - Sat: 7:00 AM - 7:00 PM", "Sunday: 9:00 AM - 5:00 PM"],
      action: null,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/contact_img.png"
            alt="Contact hero"
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

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary-foreground font-semibold text-lg mb-4 block animate-fade-up drop-shadow-md">Contact Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-up delay-100 drop-shadow-lg">
              Get In <span className="text-accent">Touch</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 animate-fade-up delay-200 drop-shadow-md">
              Have questions? We're here to help. Reach out to us through any of our contact channels.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {info.icon}
                </div>
                <h3 className="text-lg font-heading font-bold text-secondary mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground text-sm">
                    {info.action && idx === 0 ? (
                      <a href={info.action} className="hover:text-primary transition-colors">{detail}</a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-up">
              <span className="text-primary font-semibold text-lg">Send a Message</span>
              <h2 className="section-title mt-2 mb-6">We'd Love to Hear From You</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible. For faster response, your message will be sent via WhatsApp.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="0803 XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Order Enquiry">Order Enquiry</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Support">Support</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <button type="submit" className="btn-primary inline-flex items-center gap-2">
                  <Send size={18} />
                  Send via WhatsApp
                </button>
              </form>
            </div>

            {/* Map & Quick Contact */}
            <div className="animate-slide-in-right">
              <div className="bg-muted rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-heading font-bold text-secondary mb-4">Quick Contact</h3>
                <p className="text-muted-foreground mb-6">
                  For immediate assistance, contact us directly on WhatsApp or give us a call.
                </p>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/2349076412314?text=Hello! I have an enquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span className="font-semibold">Chat on WhatsApp</span>
                  </a>
                  <a
                    href="tel:08133972958"
                    className="flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-xl transition-colors"
                  >
                    <Phone className="w-6 h-6" />
                    <span className="font-semibold">Call: 0813 397 2958</span>
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0876046038927!2d3.3433!3d6.6167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzcnMDAuMSJOIDPCsDIwJzM1LjkiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Eligas Energies Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Looking to Partner With Us?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            We're looking for filling stations to partner with as fuel and distribution hubs (including LPG services where applicable). Reach out to us today!
          </p>
          <a
            href="https://wa.me/2349076412314?text=Hello! I'm interested in partnering with Eligas Energies as a fuel and distribution hub."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero bg-secondary hover:bg-secondary/90 inline-flex items-center gap-2"
          >
            <MessageCircle size={20} />
            Discuss Partnership
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
