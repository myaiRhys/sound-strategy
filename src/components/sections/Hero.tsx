import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-car-audio.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional car audio installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-6"
          >
            <MapPin className="w-4 h-4 text-accent" />
            Mobile Installation • Cape Town
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Audio, Video & Security
            <br />
            <span className="text-gradient">Solutions — We Come To You</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-xl"
          >
            Cape Town's trusted mobile installation experts. From wireless CarPlay to CCTV systems, we bring professional installation to your door.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero-primary" size="xl" asChild>
              <a href="https://wa.me/27000000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Get a Free Quote
              </a>
            </Button>
            <Button variant="hero-secondary" size="xl" asChild>
              <a href="tel:+27000000000">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <div className="w-2 h-2 rounded-full bg-accent" />
              20+ Years Experience
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <div className="w-2 h-2 rounded-full bg-accent" />
              5★ Google Rating
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <div className="w-2 h-2 rounded-full bg-accent" />
              Mobile Service
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
