import { Download, ExternalLink, BookOpen, Video, Headphones, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import anxietyAwarenessImage from "@/assets/anxiety-awareness.jpg";
import burnoutInfoImage from "@/assets/burnout-info.jpg";

const Resources = () => {
  const resources = [
    {
      icon: FileText,
      title: "Anxiety Management Worksheet",
      description: "A practical guide to identifying triggers and developing coping strategies for anxiety.",
      type: "PDF Download",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: BookOpen,
      title: "Daily Mindfulness Journal",
      description: "Structured journal prompts to help you practice mindfulness and self-reflection.",
      type: "PDF Download",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Headphones,
      title: "Guided Meditation Audio",
      description: "10-minute guided meditation sessions for stress relief and relaxation.",
      type: "Audio Resource",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Video,
      title: "Breathing Exercises Video",
      description: "Step-by-step breathing techniques to help manage stress and anxiety.",
      type: "Video Guide",
      color: "bg-red-50 text-red-600"
    }
  ];

  const externalLinks = [
    {
      title: "National Institute of Mental Health",
      description: "Comprehensive information on mental health conditions and treatments.",
      url: "https://www.nimh.nih.gov"
    },
    {
      title: "Mental Health First Aid",
      description: "Learn how to help someone who is developing a mental health problem.",
      url: "https://www.mentalhealthfirstaid.org"
    },
    {
      title: "Crisis Text Line",
      description: "Free, 24/7 support via text message for people in crisis.",
      url: "https://www.crisistextline.org"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
              Mental Health Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Free tools, guides, and resources to support your mental health journey. 
              These materials complement professional therapy and provide ongoing support.
            </p>
          </div>

          {/* Educational Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img 
                src={anxietyAwarenessImage} 
                alt="Anxiety awareness and management information" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img 
                src={burnoutInfoImage} 
                alt="Burnout prevention and management guide" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Downloadable Resources */}
          <div className="mb-16">
            <h3 className="font-heading text-2xl font-semibold text-primary mb-8 text-center">
              Free Downloads
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <div 
                    key={index}
                    className="bg-card rounded-2xl p-6 shadow-card hover:shadow-float transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${resource.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-heading text-lg font-semibold text-primary mb-2">
                          {resource.title}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-3">
                          {resource.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                            {resource.type}
                          </span>
                          <Button 
                            size="sm"
                            variant="outline"
                            className="border-primary/20 hover:bg-primary hover:text-primary-foreground"
                          >
                            <Download size={16} className="mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* External Resources */}
          <div className="mb-16">
            <h3 className="font-heading text-2xl font-semibold text-primary mb-8 text-center">
              Helpful Links
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {externalLinks.map((link, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-card hover:shadow-float transition-all duration-300"
                >
                  <h4 className="font-heading text-lg font-semibold text-primary mb-2">
                    {link.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    {link.description}
                  </p>
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary-light transition-colors font-medium"
                  >
                    Visit Resource
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Resources */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border-l-4 border-destructive">
            <h3 className="font-heading text-2xl font-semibold text-destructive mb-4">
              Crisis Resources
            </h3>
            <p className="text-muted-foreground mb-6">
              If you're experiencing a mental health crisis or having thoughts of self-harm, 
              please reach out for immediate help:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Kenya Crisis Helplines:</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Befrienders Kenya:</strong> +254 722 178 177</p>
                  <p><strong>Kenya Red Cross:</strong> 1199</p>
                  <p><strong>Emergency Services:</strong> 911 or 999</p>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">International:</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Crisis Text Line:</strong> Text HOME to 741741</p>
                  <p><strong>International Hotlines:</strong> findahelpline.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;