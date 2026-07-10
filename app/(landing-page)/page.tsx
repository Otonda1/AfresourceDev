import Capabilities from "./_components/Capabilities";
import CTA from "./_components/CTA";
import ExperienceSpecialization from "./_components/ExperienceSpecialization";
import Hero from "./_components/Hero";
import WhoBenefits from "./_components/WhoBenefits";
import OurPerspective from "./_components/OurPerspective";
import OurProcess from "./_components/OurProcess";
import ValueProposition from "./_components/ValueProposition";

import { getPayload } from "payload";
import config from "@payload-config";

export default async function Home() {
  const payload = await getPayload({ config });

  const hompage = await payload.findGlobal({
    slug: "homepage",
  });

  return (
    <>
      <main className="">
        <Hero />
        <OurPerspective />
        <Capabilities />
        <ValueProposition />
        <OurProcess />
        <WhoBenefits />
        <ExperienceSpecialization />
        <CTA />
      </main>
    </>
  );
}
