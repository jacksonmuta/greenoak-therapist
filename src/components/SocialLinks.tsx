import { Instagram, Linkedin, Facebook } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/greenoak-wellness",
      color: "hover:text-blue-400"
    },
    {
      name: "Instagram", 
      icon: Instagram,
      url: "https://www.instagram.com/green_oak_wellness",
      color: "hover:text-pink-400"
    },
    {
      name: "Facebook",
      icon: Facebook, 
      url: "https://www.facebook.com/Green-Oak-counseling-and-Wellness",
      color: "hover:text-blue-500"
    }
  ];

  return (
    <div className="flex flex-col items-center space-y-6">
      <h4 className="font-heading text-lg font-semibold text-center">
        Connect With Us
      </h4>
      <div className="flex items-center space-x-6">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground/80 ${social.color} transition-all duration-200 hover:scale-110 hover:bg-primary-foreground/20`}
              aria-label={`Follow us on ${social.name}`}
            >
              <IconComponent className="w-5 h-5" />
            </a>
          );
        })}
      </div>
      <p className="text-primary-foreground/60 text-sm text-center max-w-md">
        Follow us for mental health tips, resources, and updates on our services. 
        Join our community focused on wellness and healing.
      </p>
    </div>
  );
};

export default SocialLinks;