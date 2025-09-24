import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, User, Mail, Phone, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // In a real app, you would send this to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Consultation Request Sent!",
      description: "We'll get back to you within 24 hours to confirm your appointment.",
    });

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      preferredDate: "",
      preferredTime: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="book-session" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
              Book a Consultation Call
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Take the first step towards better mental health. Schedule a confidential 
              consultation to discuss your needs and how we can help.
            </p>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl shadow-card p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-base font-medium flex items-center space-x-2">
                    <User size={18} className="text-primary" />
                    <span>Full Name *</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="h-12 text-base"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-medium flex items-center space-x-2">
                    <Mail size={18} className="text-primary" />
                    <span>Email Address *</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="h-12 text-base"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-medium flex items-center space-x-2">
                    <Phone size={18} className="text-primary" />
                    <span>Phone Number *</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 7XX XXX XXX"
                    className="h-12 text-base"
                    required
                  />
                </div>

                {/* Preferred Date */}
                <div className="space-y-2">
                  <Label htmlFor="preferredDate" className="text-base font-medium flex items-center space-x-2">
                    <Calendar size={18} className="text-primary" />
                    <span>Preferred Date</span>
                  </Label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="h-12 text-base"
                  />
                </div>

                {/* Preferred Time */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="preferredTime" className="text-base font-medium flex items-center space-x-2">
                    <Clock size={18} className="text-primary" />
                    <span>Preferred Time</span>
                  </Label>
                  <Input
                    id="preferredTime"
                    name="preferredTime"
                    type="time"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="h-12 text-base"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-base font-medium flex items-center space-x-2">
                  <MessageCircle size={18} className="text-primary" />
                  <span>Anything you'd like me to keep in mind</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share any specific concerns, goals, or questions you have..."
                  className="min-h-[120px] text-base resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-hero hover:opacity-90 text-lg font-semibold py-4 shadow-float"
                >
                  Schedule My Consultation
                </Button>
              </div>

              {/* Privacy Note */}
              <p className="text-sm text-muted-foreground text-center mt-4">
                Your information is completely confidential and secure. We'll only use it to 
                contact you about your consultation.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;