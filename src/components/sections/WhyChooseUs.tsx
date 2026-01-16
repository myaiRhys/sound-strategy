import { motion } from "framer-motion";
import { Truck, Award, Wrench, Clock } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "We Come To You",
    description: "Mobile installation service across Cape Town. No need to bring your vehicle to us — we bring the expertise to your location.",
  },
  {
    icon: Award,
    title: "20+ Years Experience",
    description: "From the analogue era to today's digital systems, we've mastered every generation of audio, video, and security technology.",
  },
  {
    icon: Wrench,
    title: "Full Service",
    description: "We don't just install — we supply quality products, maintain systems, and provide repairs when you need them.",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "Fast turnaround on quotes and installations. We understand your time is valuable.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-secondary/50" id="why-us">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Cape Town's Trusted Installation Experts
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              With over two decades of experience, Audiocoustics has grown from car audio specialists to a full-service installation company covering automotive, home, business, and marine electronics.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="font-heading text-5xl md:text-6xl font-bold text-accent mb-2">
                    20+
                  </div>
                  <p className="text-muted-foreground font-medium">
                    Years Experience
                  </p>
                </div>
                <div className="text-center">
                  <div className="font-heading text-5xl md:text-6xl font-bold text-accent mb-2">
                    5★
                  </div>
                  <p className="text-muted-foreground font-medium">
                    Google Rating
                  </p>
                </div>
                <div className="text-center">
                  <div className="font-heading text-5xl md:text-6xl font-bold text-accent mb-2">
                    1000+
                  </div>
                  <p className="text-muted-foreground font-medium">
                    Installations
                  </p>
                </div>
                <div className="text-center">
                  <div className="font-heading text-5xl md:text-6xl font-bold text-accent mb-2">
                    100%
                  </div>
                  <p className="text-muted-foreground font-medium">
                    Satisfaction
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
