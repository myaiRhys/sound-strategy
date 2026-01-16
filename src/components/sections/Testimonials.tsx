import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Johan van der Merwe",
    role: "Toyota Hilux Owner",
    content: "Had wireless CarPlay installed in my Hilux. Absolutely fantastic work! The team came to my office and had it done in under 2 hours. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah Thompson",
    role: "Home Owner, Constantia",
    content: "Audiocoustics installed our complete CCTV system. Professional service from quote to installation. We feel so much safer now.",
    rating: 5,
  },
  {
    name: "Mike Peterson",
    role: "Business Owner",
    content: "They've handled all our installations - TV mounting, DSTV, networking. Reliable, punctual, and great pricing. Our go-to team for everything AV.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-background" id="reviews">
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
            Reviews
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Join hundreds of satisfied customers across Cape Town who trust us with their audio, video, and security needs.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-accent/20">
                <Quote className="w-10 h-10" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div>
                <p className="font-heading font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary border border-border">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-foreground font-medium">5.0 Rating on Google</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
