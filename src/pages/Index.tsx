import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCategories } from "@/components/ServiceCategories";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ServiHub - Home Services at Your Fingertips</title>
        <meta name="description" content="Book trusted professionals for all your home service needs. From repairs to beauty, we bring experts to your doorstep. Carpentry, plumbing, electrical, housekeeping & more." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <ServiceCategories />
          <HowItWorks />
          <Testimonials />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
