import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "#" },
  {
    name: "Car Audio & Tech",
    href: "#car-audio",
    children: [
      { name: "Wireless CarPlay", href: "#carplay" },
      { name: "Car Radios", href: "#radios" },
      { name: "Reverse Cameras", href: "#cameras" },
      { name: "Vehicle Tracking", href: "#tracking" },
    ],
  },
  { name: "CCTV & Security", href: "#cctv" },
  { name: "Home & Business", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
            <span className="text-white font-heading font-bold text-lg">A</span>
          </div>
          <span className="font-heading font-bold text-xl text-foreground">
            Audiocoustics
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <a
                href={item.href}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
                {item.children && <ChevronDown className="w-4 h-4" />}
              </a>
              {item.children && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-card rounded-lg shadow-card-hover border border-border p-2 min-w-[200px]">
                    {item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+27000000000" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
          <Button variant="whatsapp" size="default">
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-foreground"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container py-4 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-foreground font-medium hover:bg-secondary rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Button variant="whatsapp" size="lg" className="w-full">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
