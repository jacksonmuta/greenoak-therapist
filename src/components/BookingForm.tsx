import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  // -----------------------------
  // Handle Input Change
  // -----------------------------
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // -----------------------------
  // Handle Submit (EmailJS)
  // -----------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in your name, email, and phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSending(true);

    try {
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      console.log("Sending Email with:", { serviceID, templateID, publicKey });

      await emailjs.send(
        serviceID,
        templateID,
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          message: formData.message,
        },
        publicKey
      );

      toast({
        title: "Consultation Request Sent!",
        description: "We’ll get back to you within 24 hours.",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
      });
    } catch (error) {
      console.error("EMAILJS ERROR:", error);

      toast({
        title: "Message Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    }

    setIsSending(false);
  };

  // -----------------------------
  // UI
  // -----------------------------
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
              Take the first step toward better mental health. Schedule a
              private consultation to discuss your needs.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-card rounded-2xl shadow-card p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="fullName"
                    className="flex items-center gap-2 text-base font-medium"
                  >
                    <User size={18} className="text-primary" />
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="h-12 text-base"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="flex items-center gap-2 text-base font-medium"
                  >
                    <Mail size={18} className="text-primary" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="h-12 text-base"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="flex items-center gap-2 text-base font-medium"
                  >
                    <Phone size={18} className="text-primary" />
                    Phone Number *
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
                  <Label
                    htmlFor="preferredDate"
                    className="flex items-center gap-2 text-base font-medium"
                  >
                    <Calendar size={18} className="text-primary" />
                    Preferred Date
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
                  <Label
                    htmlFor="preferredTime"
                    className="flex items-center gap-2 text-base font-medium"
                  >
                    <Clock size={18} className="text-primary" />
                    Preferred Time
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
                <Label
                  htmlFor="message"
                  className="flex items-center gap-2 text-base font-medium"
                >
                  <MessageCircle size={18} className="text-primary" />
                  Anything you'd like me to know
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share concerns, goals, questions..."
                  className="min-h-[120px] resize-none text-base"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-hero hover:opacity-90 text-lg font-semibold py-4 shadow-float"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Schedule My Consultation"}
                </Button>
              </div>

              {/* Privacy Note */}
              <p className="text-sm text-muted-foreground text-center mt-4">
                Your information is confidential and securely handled.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
