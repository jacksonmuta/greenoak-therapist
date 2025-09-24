import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding Anxiety: Signs, Symptoms, and Coping Strategies",
      excerpt: "Learn to recognize anxiety symptoms and discover practical techniques to manage worry and stress in your daily life.",
      date: "2024-09-20",
      readTime: "5 min read",
      category: "Mental Health"
    },
    {
      title: "The Importance of Self-Care in Mental Health",
      excerpt: "Explore why self-care isn't selfish and discover simple practices that can significantly improve your mental wellbeing.",
      date: "2024-09-15",
      readTime: "7 min read",
      category: "Self-Care"
    },
    {
      title: "Building Healthy Relationships: Communication Tips",
      excerpt: "Learn effective communication strategies that can strengthen your relationships and create deeper connections.",
      date: "2024-09-10",
      readTime: "6 min read",
      category: "Relationships"
    },
    {
      title: "Recognizing and Preventing Burnout",
      excerpt: "Understand the warning signs of burnout and learn practical strategies to maintain your mental health in demanding situations.",
      date: "2024-09-05",
      readTime: "8 min read",
      category: "Workplace"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
              Mental Health Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Evidence-based articles and practical tips to support your mental health journey 
              and help you live a more fulfilling life.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <article 
                key={index}
                className="bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-float transition-all duration-300 group cursor-pointer"
              >
                {/* Category Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  {post.category}
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-semibold text-primary mb-3 group-hover:text-primary-light transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Read More */}
                <div className="flex items-center text-primary font-medium group-hover:text-primary-light transition-colors">
                  <span>Read More</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-soft rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
              Stay Updated on Mental Health
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest mental health insights, tips, 
              and resources delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground"
              />
              <Button className="bg-gradient-hero hover:opacity-90 px-6 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;