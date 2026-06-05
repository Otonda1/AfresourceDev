import Capabilities from "./_components/Capabilities";
import CTA from "./_components/CTA";
import ExperienceSpecialization from "./_components/ExperienceSpecialization";
import Hero from "./_components/Hero";
import InstitutionalEcosystem from "./_components/InstitutionalEcosystem";
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

  console.log(hompage.hero);

  return (
    <>
      <main className="">
        <Hero data={hompage.hero} />
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
