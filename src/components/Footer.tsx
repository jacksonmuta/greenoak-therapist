import { Phone, Mail, MapPin, Heart } from "lucide-react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Blog", id: "blog" },
    { label: "Resources", id: "resources" },
    { label: "Contact", id: "contact" },
  ];

  const services = [
    "Individual Therapy",
    "Couples Therapy", 
    "Group Therapy",
    "Child Therapy",
    "Corporate Training",
    "Specialized Programs"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-lg">G</span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold">Greenoak</h3>
                <p className="text-primary-foreground/80 text-sm -mt-1">Wellness Centre</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Professional therapy and mental health services to help you flourish 
              and maintain a balanced, fulfilling life.
            </p>
            <div className="flex items-center space-x-2 text-accent">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Your mental health is your wealth</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">+254 791 304 845</p>
                  <p className="text-primary-foreground/60 text-sm">Mon-Fri, 9AM-6PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">greenoakwellness@gmail.com</p>
                  <p className="text-primary-foreground/60 text-sm">24hr response</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">Nairobi, Kenya</p>
                  <p className="text-primary-foreground/60 text-sm">Online sessions available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <SocialLinks />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Greenoak Wellness Centre. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Professional Ethics
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;