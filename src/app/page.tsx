import Image from "next/image";
import Link from "next/link";
import { getFeaturedProperties } from "@/data/properties";
import { PropertyCard } from "@/components/shared/PropertyCard";
import { SearchFilter } from "@/components/shared/SearchFilter";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { Button } from "@/components/ui/button";

export default function Home() {
  const featuredProperties = getFeaturedProperties();

  return (
    <div className="flex flex-col min-h-screen">

      {/* 1. MASSIVE TYPOGRAPHIC HERO (Layered Depth) */}
      <section className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2500&auto=format&fit=crop"
            alt="Luxury Architecture"
            fill
            className="object-cover opacity-60 dark:opacity-40"
            priority
          />
        </div>

        <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center mix-blend-difference text-white">
          <h1 className="text-[15vw] leading-[0.8] font-serif tracking-tighter text-center uppercase relative">
            <span className="block italic font-light ml-[-10vw]">Raw</span>
            <span className="block font-medium mr-[-10vw]">Elegance<span className="text-primary">.</span></span>
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 pb-8 px-6 flex justify-between items-end">
          <p className="text-xs uppercase tracking-[0.2em] max-w-[200px] text-white mix-blend-difference font-medium">
            Curating architectural significance globally.
          </p>
          <div className="w-[1px] h-24 bg-white hidden md:block" />
          <Link href="/properties" className="text-xs uppercase tracking-[0.2em] hover:text-primary transition-colors text-white mix-blend-difference font-medium">
            Explore Portfolio ▸
          </Link>
        </div>
      </section>

      {/* 2. DYNAMIC SEARCH BAR (Stark / Seamless connection) */}
      <section className="w-full bg-background border-b border-border z-30 relative -mt-[1px]">
        <div className="container mx-auto max-w-[1400px]">
          <SearchFilter />
        </div>
      </section>

      {/* 3. FEATURED PROPERTIES (Asymmetric Grid) */}
      <section className="py-24 md:py-40 bg-background overflow-hidden relative">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-border/40 pb-12">
            <h2 className="text-5xl md:text-7xl font-serif tracking-tighter">
              Featured <span className="text-primary italic block md:inline">Editions.</span>
            </h2>
            <Link href="/properties" className="mt-8 md:mt-0">
              <Button variant="outline" className="hidden md:flex">View All Properties</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
            {featuredProperties.map((property, idx) => (
              <div key={property.id} className={`${idx === 1 ? 'md:mt-32' : idx === 2 ? 'lg:mt-16' : ''}`}>
                <PropertyCard property={property} index={idx} />
              </div>
            ))}
          </div>

          <div className="mt-16 md:hidden">
            <Link href="/properties">
              <Button variant="outline" className="w-full">View All Properties</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. COMPANY CREDIBILITY (Editorial / Brutalist Typography) */}
      <section className="py-24 md:py-40 bg-foreground text-background">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">01 / The Ethos</p>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
                We don&apos;t sell real estate. We curate architectural <span className="text-primary italic">legacies.</span>
              </h2>
              <p className="text-lg md:text-xl font-light text-muted-foreground leading-relaxed max-w-lg mb-12">
                Nexa Estate transcends traditional brokerage. Our curated portfolio represents the pinnacle of modern design, brutalist form, and uncompromising luxury. Every property is selected for its architectural significance.
              </p>
              <Link href="/about">
                <Button variant="outline" className="border-border/20 hover:bg-background hover:text-foreground">
                  Our Methodology
                </Button>
              </Link>
            </div>
            <div className="relative aspect-square md:aspect-[4/5] w-full">
              <Image
                src="https://images.unsplash.com/photo-1600607687931-cecebd802404?q=80&w=1600&auto=format&fit=crop"
                alt="Architectural details"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-8 md:p-12 w-2/3 shadow-2xl">
                <p className="text-4xl md:text-6xl font-serif mb-2">$2B+</p>
                <p className="text-xs uppercase tracking-widest">In Curated Transactions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS (Clean Typography) */}
      <section className="py-24 md:py-40 bg-background relative border-t border-border">
        {/* Subtle background text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden pointer-events-none opacity-[0.03]">
          <span className="text-[20vw] font-serif leading-none tracking-tighter whitespace-nowrap">TRUSTED BY</span>
        </div>

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="mb-24 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-6xl font-serif tracking-tighter mb-6">
              Voices of <span className="italic block text-primary">Conviction.</span>
            </h2>
            <div className="w-12 h-[1px] bg-primary mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Nexa didn't just find a house; they secured an architectural masterpiece before it ever hit the market."
              author="Jonathan Vance"
              role="Tech Executive"
              index={0}
            />
            <TestimonialCard
              quote="Their methodology is starkly different from typical agencies. Precise, highly curated, and fiercely private."
              author="Amelia Hartman"
              role="Art Collector"
              index={1}
            />
            <TestimonialCard
              quote="The only firm I trust to manage my global property portfolio. Their eye for structural integrity is unmatched."
              author="David O. Russell"
              role="Venture Capitalist"
              index={2}
            />
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION (Geometric starkness) */}
      <section className="py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 max-w-[1400px] text-center flex flex-col items-center">
          <h2 className="text-5xl md:text-8xl font-serif tracking-tighter mb-8 max-w-4xl">
            Begin the <span className="italic font-light">Acquisition.</span>
          </h2>
          <p className="text-lg md:text-2xl font-light mb-16 max-w-xl opacity-90">
            Connect with our senior partners to discuss your distinct requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/contact">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 w-full sm:w-auto">
                Contact the Firm
              </Button>
            </Link>
            <Link href="/properties">
              <Button variant="outline" size="lg" className="border-background text-background hover:bg-background hover:text-foreground w-full sm:w-auto">
                Explore the Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
