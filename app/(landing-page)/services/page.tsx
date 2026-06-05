import ServicesCTA from "./_components/CTA";
import DetailedServices from "./_components/DetailedServices";
import EngagementModels from "./_components/EngagementModels";
import ServicesHero from "./_components/Hero";
import Intro from "./_components/Intro";
import ServicesGrid from "./_components/ServicesGrid";
import SignatureArea from "./_components/SignatureArea";

const Services = () => {
  return (
    <>
      <ServicesHero />
      <Intro />
      <ServicesGrid />
      <DetailedServices />
      <SignatureArea />
      <EngagementModels />
      <ServicesCTA />
    </>
  );
};

export default Services;
