import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section className="py-20 md:py-32 gradient-hero" id="contact">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: CTA Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
              Ready to Upgrade Your System?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Get a free quote today. Whether it's wireless CarPlay for your car, CCTV for your home, or a complete AV setup for your business — we've got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button variant="hero-primary" size="xl" asChild>
                <a href="https://wa.me/27000000000" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button variant="hero-secondary" size="xl" asChild>
                <a href="tel:+27000000000">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5 text-accent" />
                <span>+27 000 000 000</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="w-5 h-5 text-accent" />
                <span>info@audiocoustics.co.za</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Serving all Cape Town areas</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Clock className="w-5 h-5 text-accent" />
                <span>Mon–Fri: 8am–5pm | Sat: 8am–1pm</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Quick Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                Request a Free Quote
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                    placeholder="+27 000 000 000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Interested In
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-muted-foreground">
                    <option>Select a service...</option>
                    <option>Wireless CarPlay / Android Auto</option>
                    <option>Car Radio / Head Unit</option>
                    <option>Reverse Camera / Parking Sensors</option>
                    <option>CCTV System</option>
                    <option>TV Wall Mounting</option>
                    <option>DSTV Installation</option>
                    <option>Home Audio System</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button variant="accent" size="lg" className="w-full">
                  Send Quote Request
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
