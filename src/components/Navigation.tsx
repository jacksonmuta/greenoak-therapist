import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Blog", id: "blog" },
    { label: "Resources", id: "resources" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">G</span>
            </div>
            <div>
              <h1 className="font-heading text-xl font-semibold text-primary">Greenoak</h1>
              <p className="text-xs text-muted-foreground -mt-1">Wellness Centre</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("book-session")}
              className="bg-gradient-hero hover:opacity-90 transition-opacity"
            >
              Book Session
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-card rounded-lg shadow-card animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4">
                <Button 
                  onClick={() => scrollToSection("book-session")}
                  className="w-full bg-gradient-hero hover:opacity-90"
                >
                  Book Session
                </Button>
              </div>
              <div className="px-4 pt-4 border-t border-border">
                <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Phone size={16} />
                    <span>+254 791 304 845</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={16} />
                    <span>greenoakwellness@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;