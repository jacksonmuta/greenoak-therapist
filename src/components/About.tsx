import { Heart, Award, Users, Shield } from "lucide-react";
import therapistImage from "@/assets/therapist-office.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
              About Greenoak Wellness Centre
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dedicated to providing compassionate, professional mental health services 
              that empower individuals to overcome challenges and thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Therapist Image */}
            <div className="lg:order-2">
              <img 
                src={therapistImage} 
                alt="Professional therapist in consultation" 
                className="w-full h-[400px] object-cover rounded-2xl shadow-card"
              />
            </div>

            {/* Content */}
            <div className="space-y-6 lg:order-1">
              <h3 className="font-heading text-2xl font-semibold text-primary">
                Professional Mental Health Care
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Greenoak Wellness Centre, we believe that mental health is just as important 
                as physical health. Our team of qualified therapists and counselors provide 
                confidential, personalized care tailored to your unique needs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We offer a safe, non-judgmental space where you can explore your thoughts and 
                feelings, develop coping strategies, and work towards positive change. Our 
                approach combines evidence-based therapies with compassionate care.
              </p>
              
              {/* Qualifications */}
              <div className="bg-primary-soft rounded-lg p-6 mt-8">
                <h4 className="font-heading text-lg font-semibold text-primary mb-3">
                  Our Qualifications
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Licensed Professional Counselors</li>
                  <li>• Certified in Evidence-Based Therapies</li>
                  <li>• Trauma-Informed Care Specialists</li>
                  <li>• Ongoing Professional Development</li>
                </ul>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-card rounded-xl p-6 shadow-soft">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-primary mb-2">
                  Compassionate Care
                </h4>
                <p className="text-muted-foreground text-sm">
                  We provide empathetic, non-judgmental support in a safe environment.
                </p>
              </div>

              <div className="bg-gradient-card rounded-xl p-6 shadow-soft">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-primary mb-2">
                  Confidentiality
                </h4>
                <p className="text-muted-foreground text-sm">
                  Your privacy and confidentiality are our highest priorities.
                </p>
              </div>

              <div className="bg-gradient-card rounded-xl p-6 shadow-soft">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-primary mb-2">
                  Professional Excellence
                </h4>
                <p className="text-muted-foreground text-sm">
                  Evidence-based practices delivered by qualified professionals.
                </p>
              </div>

              <div className="bg-gradient-card rounded-xl p-6 shadow-soft">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-primary mb-2">
                  Inclusive Approach
                </h4>
                <p className="text-muted-foreground text-sm">
                  Welcoming all individuals regardless of background or identity.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center bg-gradient-soft rounded-2xl p-8 md:p-12">
            <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto italic">
              "To provide accessible, compassionate mental health services that empower 
              individuals to overcome challenges, build resilience, and achieve lasting 
              well-being. We believe every person deserves to live a fulfilling life, 
              and we're here to support you on that journey."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;