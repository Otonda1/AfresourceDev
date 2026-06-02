import Footer from "@/components/layout/Footer";
import Capabilities from "./_components/Capabilities";
import CTA from "./_components/CTA";
import ExperienceSpecialization from "./_components/ExperienceSpecialization";
import Hero from "./_components/Hero";
import InstitutionalEcosystem from "./_components/InstitutionalEcosystem";
import OurPerspective from "./_components/OurPerspective";
import OurProcess from "./_components/OurProcess";
import ValueProposition from "./_components/ValueProposition";

export default function Home() {
  return (
    <>
      <main className="">
        <Hero />
        <OurPerspective />
        <Capabilities />
        <ValueProposition />
        <OurProcess />
        <InstitutionalEcosystem />
        <ExperienceSpecialization />
        <CTA />
      </main>
    </>
  );
}
