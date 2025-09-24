import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BookingForm from "@/components/BookingForm";
import About from "@/components/About";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import Resources from "@/components/Resources";
import Payment from "@/components/Payment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="scroll-smooth">
        <Hero />
        <About />
        <Services />
        <BookingForm />
        <Blog />
        <Resources />
        <Payment />  
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
