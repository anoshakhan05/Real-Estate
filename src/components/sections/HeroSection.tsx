import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SearchFilter } from "@/components/sections/SearchFilter";

export function HeroSection() {
    return (
        <section className="relative flex h-[80vh] min-h-[600px] w-full items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80')"
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
                <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
                    Discover Your Next Luxury Experience
                </h1>
                <p className="mx-auto mb-10 max-w-2xl text-lg text-white/90 sm:text-xl">
                    Exclusive properties in the most desirable locations. Let us help you find the home that defines your legacy.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button size="lg" asChild className="text-lg">
                        <Link href="/properties">Explore Properties</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="bg-white/10 text-lg text-white hover:bg-white hover:text-black">
                        <Link href="/contact">Contact an Agent</Link>
                    </Button>
                </div>
            </div>

            {/* Absolute positioned Search Filter at the bottom */}
            <div className="absolute -bottom-12 left-0 right-0 z-20 mx-auto w-full max-w-5xl px-4">
                <SearchFilter />
            </div>
        </section>
    );
}
