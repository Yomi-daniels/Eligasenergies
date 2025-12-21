import { useState } from "react";
import { X, MessageCircle, MapPin, User, Phone, Calendar, Package } from "lucide-react";

const OrderModal = ({ product, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    landmark: "",
    deliveryDate: "",
    deliveryTime: "",
    quantity: 1,
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `🛒 *NEW ORDER*
    
*Product:* ${product.name}
*Price:* ${product.price}
*Quantity:* ${formData.quantity}

📋 *Customer Details:*
*Name:* ${formData.name}
*Phone:* ${formData.phone}

📍 *Delivery Address:*
${formData.address}
*Landmark:* ${formData.landmark || "N/A"}

📅 *Preferred Delivery:*
*Date:* ${formData.deliveryDate}
*Time:* ${formData.deliveryTime}

📝 *Additional Notes:*
${formData.notes || "None"}`;

    const whatsappUrl = `https://wa.me/2340976412314?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-card w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 bg-primary text-primary-foreground p-4 sm:p-6 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
          <h2 className="text-xl sm:text-2xl font-heading font-bold pr-8">Complete Your Order</h2>
          <p className="text-primary-foreground/80 mt-1 text-sm sm:text-base">{product.name} - {product.price}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
          {/* Name */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
              <User size={16} className="text-primary" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
              <Phone size={16} className="text-primary" />
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="e.g., 08012345678"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
            />
          </div>

          {/* Address */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
              <MapPin size={16} className="text-primary" />
              Delivery Address *
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Enter your full delivery address"
              rows={2}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-sm sm:text-base"
            />
          </div>

          {/* Landmark */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
              <MapPin size={16} className="text-muted-foreground" />
              Nearest Landmark
            </label>
            <input
              type="text"
              name="landmark"
              value={formData.landmark}
              onChange={handleChange}
              placeholder="e.g., Near GTBank, Opposite Market"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
            />
          </div>

          {/* Delivery Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                <Calendar size={16} className="text-primary" />
                Preferred Date *
              </label>
              <input
                type="date"
                name="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                <Calendar size={16} className="text-primary" />
                Preferred Time *
              </label>
              <select
                name="deliveryTime"
                value={formData.deliveryTime}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
              >
                <option value="">Select time</option>
                <option value="Morning (8AM - 12PM)">Morning (8AM - 12PM)</option>
                <option value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</option>
                <option value="Evening (4PM - 7PM)">Evening (4PM - 7PM)</option>
              </select>
            </div>
          </div>

          {/* Quantity */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
              <Package size={16} className="text-primary" />
              Quantity *
            </label>
            <select
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          {/* Notes */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
              Additional Notes
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any special instructions or requests..."
              rows={2}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-sm sm:text-base"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 sm:py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            <MessageCircle size={20} />
            Send Order via WhatsApp
          </button>

          <p className="text-center text-xs text-muted-foreground">
            Your order details will be sent to our WhatsApp for confirmation
          </p>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
