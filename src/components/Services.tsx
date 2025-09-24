import { User, Users, Heart, Briefcase, Brain, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import therapySessionImage from "@/assets/therapy-session.jpg";
import servicesBrochureImage from "@/assets/services-overview.jpg";

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Individual Therapy",
      description:
        "One-on-one sessions to address personal challenges, anxiety, depression, trauma, and personal growth.",
      features: [
        "Personalized treatment plans",
        "Confidential sessions",
        "Evidence-based approaches",
        "Flexible scheduling",
      ],
    },
    {
      icon: Heart,
      title: "Couples Therapy",
      description:
        "Strengthen your relationship through improved communication, conflict resolution, and emotional connection.",
      features: [
        "Communication skills",
        "Conflict resolution",
        "Intimacy building",
        "Relationship goals",
      ],
    },
    {
      icon: Users,
      title: "Group Therapy",
      description:
        "Connect with others facing similar challenges in a supportive group environment.",
      features: [
        "Peer support",
        "Shared experiences",
        "Social skills",
        "Cost-effective",
      ],
    },
    {
      icon: UserCheck,
      title: "Child Therapy",
      description:
        "Specialized therapy for children and adolescents dealing with behavioral, emotional, or developmental challenges.",
      features: [
        "Age-appropriate techniques",
        "Play therapy",
        "Family involvement",
        "School collaboration",
      ],
    },
    {
      icon: Briefcase,
      title: "Corporate Training",
      description:
        "Mental health workshops and training programs for organizations to support employee wellbeing.",
      features: [
        "Stress management",
        "Team building",
        "Leadership skills",
        "Workplace wellness",
      ],
    },
    {
      icon: Brain,
      title: "Specialized Programs",
      description:
        "Targeted programs for specific issues like addiction recovery, trauma healing, and anxiety management.",
      features: [
        "Trauma-informed care",
        "Addiction support",
        "Anxiety management",
        "PTSD treatment",
      ],
    },
  ];

  const scrollToBooking = () => {
    const element = document.getElementById("book-session");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive mental health services tailored to meet your unique
              needs. We're here to support you every step of the way.
            </p>
          </div>

          {/* Services Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="rounded-2xl overflow-hidden shadow-card h-80 flex items-center justify-center bg-gray-100">
              <img
                src={therapySessionImage}
                alt="Professional therapy session"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card h-80 flex items-center justify-center bg-gray-100">
              <img
                src={servicesBrochureImage}
                alt="Greenoak Wellness Centre services"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-card hover:shadow-float transition-all duration-300 group"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant="outline"
                    onClick={scrollToBooking}
                    className="w-full border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    Book Consultation
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-card rounded-2xl p-8 md:p-12 shadow-card">
            <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
              Not Sure Which Service Is Right for You?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Book a consultation call and we'll help you determine the best
              approach for your specific needs and goals.
            </p>
            <Button
              size="lg"
              onClick={scrollToBooking}
              className="bg-gradient-hero hover:opacity-90 px-8 py-4 text-lg font-semibold shadow-float"
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
