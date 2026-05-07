// app/sections/Hero.tsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16 lg:py-24">
          {/* Left Column — Content */}
          <div className="flex flex-col items-start space-y-8">
            {/* Badge */}
            <span className="inline-block rounded-full bg-primaryAccent px-5 py-2 text-xs font-body-semibold uppercase tracking-[0.2em] text-foreground">
              Established Excellence
            </span>

            {/* Heading */}
            <h1 className="font-heading-bold text-4xl italic leading-[1.1] text-primary md:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
              Advisory for structured, effective organizations.
            </h1>

            {/* Description */}
            <p className="max-w-md border-l-2 border-secondary pl-6 font-body-normal text-base leading-relaxed text-foreground/80 md:text-lg">
              We help organizations strengthen people infrastructure, structure,
              and governance to support clarity, consistency, and scale.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/services"
                className="inline-flex items-center bg-accent px-8 py-3.5 text-sm font-body-semibold uppercase tracking-[0.15em] text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Explore Our Services
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center border border-secondary px-8 py-3.5 text-sm font-body-semibold uppercase tracking-[0.15em] text-secondary transition-all duration-200 hover:bg-secondary hover:text-background"
              >
                Speak With Us
              </Link>
            </div>
          </div>

          {/* Right Column — Image with decorative block */}
          <div className="relative">
            {/* Decorative background block */}
            <div className="absolute -bottom-6 -left-6 h-full w-full bg-gray-100 lg:-bottom-8 lg:-left-8" />

            {/* Hero Image */}
            <div className="relative overflow-hidden">
              <Image
                src="/home/hero.png"
                alt="Executive team meeting in a modern glass office"
                width={640}
                height={760}
                className="h-auto w-full object-cover grayscale"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
