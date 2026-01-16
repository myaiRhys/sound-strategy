import { motion } from "framer-motion";
import { Car, Shield, Tv, Anchor, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Car Audio & Tech",
    description: "Wireless CarPlay, Android Auto, radios, reverse cameras, tracking, and more.",
    href: "#car-audio",
    features: ["Wireless CarPlay", "Head Units", "Reverse Cameras", "Vehicle Tracking"],
  },
  {
    icon: Shield,
    title: "CCTV & Security",
    description: "Complete surveillance solutions for homes and businesses across Cape Town.",
    href: "#cctv",
    features: ["Home Systems", "Business CCTV", "System Upgrades", "Maintenance"],
  },
  {
    icon: Tv,
    title: "Home & Business AV",
    description: "TV mounting, DSTV installation, home audio, WiFi networks, and backup power.",
    href: "#home",
    features: ["TV Mounting", "DSTV Install", "Home Audio", "WiFi Extension"],
  },
  {
    icon: Anchor,
    title: "Marine & Specialty",
    description: "Boat audio systems, truck fitments, caravan installations, and gate motors.",
    href: "#marine",
    features: ["Boat Audio", "Truck Fitments", "Gate Motors", "Access Control"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Services() {
  return (
    <section className="py-20 md:py-32 bg-background" id="services">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Everything Audio, Video & Security
          </h2>
          <p className="text-muted-foreground text-lg">
            From your car to your home and business — we supply, install, repair, and upgrade all your electronic systems.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.a
              key={service.title}
              href={service.href}
              variants={itemVariants}
              className="group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover border border-border hover:border-accent/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-1 mb-4">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-accent font-medium text-sm">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
