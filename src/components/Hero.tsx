import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("book-session");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo Badge */}
          <div className="inline-flex items-center space-x-3 bg-card/90 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-soft animate-fade-in">
            <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold">G</span>
            </div>
            <span className="font-heading text-lg font-semibold text-primary">Greenoak Wellness Centre</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-card mb-6 animate-slide-up">
            Your Mental Health
            <span className="block text-accent">Is Your Wealth</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-card/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
            Professional therapy and counseling services to help you flourish and maintain 
            a balanced, fulfilling life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button 
              size="lg"
              onClick={scrollToBooking}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold shadow-float"
            >
              Book a Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="border-card text-card hover:bg-card hover:text-primary px-8 py-4 text-lg font-semibold"
            >
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.9s'}}>
            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-soft">
              <h3 className="font-heading text-2xl font-bold text-primary mb-1">500+</h3>
              <p className="text-muted-foreground">Clients Helped</p>
            </div>
            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-soft">
              <h3 className="font-heading text-2xl font-bold text-primary mb-1">7</h3>
              <p className="text-muted-foreground">Specialized Services</p>
            </div>
            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-soft">
              <h3 className="font-heading text-2xl font-bold text-primary mb-1">24/7</h3>
              <p className="text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-card rounded-full flex justify-center">
          <div className="w-1 h-3 bg-card rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;