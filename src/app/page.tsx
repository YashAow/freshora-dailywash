import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import PricingSection from "../components/PricingSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";
import BlogSection from "../components/BlogSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <FAQSection />
      <BlogSection />
    </>
  );
}
