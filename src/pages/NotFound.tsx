import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        <div className="w-20 h-20 rounded-2xl gradient-accent flex items-center justify-center mx-auto mb-6">
          <span className="text-white font-heading font-bold text-3xl">404</span>
        </div>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="accent" size="lg" asChild>
            <Link to="/">
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </Button>
          <Button variant="whatsapp" size="lg" asChild>
            <a href="https://wa.me/27000000000" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Contact Us
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
