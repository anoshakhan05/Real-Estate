import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Maison | Nexa Estate",
    description: "The philosophy and methodology behind Nexa Estate's curated global portfolio.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="mb-24 md:mb-40 max-w-4xl">
                    <p className="text-xs uppercase tracking-[0.2em] text-primary mb-8 font-medium">The Maison</p>
                    <h1 className="text-5xl md:text-8xl font-serif tracking-tighter leading-[0.9] mb-12">
                        Beyond <span className="text-muted-foreground italic font-light">Transactions.</span>
                    </h1>
                    <p className="text-xl md:text-3xl font-light leading-relaxed text-foreground/80 max-w-2xl">
                        Founded on the principle that exceptional architecture requires exceptional representation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 mb-32 items-center">
                    <div className="relative aspect-[3/4] w-full">
                        <Image
                            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop"
                            alt="Architectural details"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-5xl font-serif mb-8">An Eye For <br /><span className="italic text-primary">Brutalism & Light.</span></h2>
                        <div className="prose prose-lg dark:prose-invert font-light leading-relaxed">
                            <p>Nexa Estate is not a volume brokerage. We operate globally as a discrete advisory firm, presenting fewer than fifty properties annually. Each residence is selected not by algorithm, but through rigorous architectural evaluation.</p>
                            <p>We believe space dictates emotion. Whether it&apos;s the raw permanence of board-formed concrete or the ethereal nature of cantilevered glass over an ocean cliff, we represent homes that command presence.</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border pt-24 grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
                    <div>
                        <p className="text-5xl font-serif mb-4">$2B+</p>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground">Historical Volume</p>
                    </div>
                    <div>
                        <p className="text-5xl font-serif mb-4">48</p>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground">Global Markets</p>
                    </div>
                    <div>
                        <p className="text-5xl font-serif mb-4">12</p>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground">Senior Partners</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
