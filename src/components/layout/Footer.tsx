import { MessageCircle } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Wireless CarPlay", href: "#carplay" },
    { name: "Car Radios", href: "#radios" },
    { name: "CCTV Systems", href: "#cctv" },
    { name: "TV Mounting", href: "#tv" },
    { name: "DSTV Installation", href: "#dstv" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Service Areas", href: "#areas" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ],
  areas: [
    "Cape Town CBD",
    "Northern Suburbs",
    "Southern Suburbs",
    "Atlantic Seaboard",
    "Helderberg",
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">A</span>
              </div>
              <span className="font-heading font-bold text-xl">
                Audiocoustics
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Cape Town's mobile installation experts for car audio, CCTV, and home entertainment systems.
            </p>
            <a
              href="https://wa.me/27000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-glow transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {footerLinks.areas.map((area) => (
                <li key={area} className="text-sm text-primary-foreground/70">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Audiocoustics. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Mobile audio, video & security installations across Cape Town
          </p>
        </div>
      </div>
    </footer>
  );
}
