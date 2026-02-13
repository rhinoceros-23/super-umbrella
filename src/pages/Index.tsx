import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HiringPartnersSection from "@/components/HiringPartnersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Index = () => (
  <Layout>
    <HeroSection />
    <StatsSection />
    <ServicesSection />
    <CoursesSection preview />
    <WhyChooseUs />
    <HiringPartnersSection />
    <TestimonialsSection />
    <CTASection />
  </Layout>
);

export default Index;
