import { getPropertyBySlug, properties } from "@/data/properties";
import { notFound } from "next/navigation";
import Image from "next/image";
import { AgentCard } from "@/components/shared/AgentCard";
import { ContactForm } from "@/components/shared/ContactForm";
import { MapSearch } from "@/components/shared/MapSearch";
import { agents } from "@/data/agents";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
    params: { slug: string };
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const property = getPropertyBySlug(params.slug);
    if (!property) return { title: "Not Found" };
    return {
        title: `${property.title} | Nexa Estate`,
        description: property.description,
    };
}

// Ensure static generation for demo since we have a fixed dataset
export function generateStaticParams() {
    return properties.map((p) => ({
        slug: p.slug,
    }));
}

export default function PropertyDetailsPage({ params }: Props) {
    const property = getPropertyBySlug(params.slug);

    if (!property) {
        notFound();
    }

    const agent = agents.find((a) => a.id === property.agentId);

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Image / Gallery Grid */}
            <section className="w-full h-[60vh] md:h-[80vh] grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 mt-20 md:mt-24 px-1 md:px-2">
                <div className="md:col-span-3 relative h-full w-full">
                    <Image
                        src={property.images[0]}
                        alt={property.title}
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 75vw"
                    />
                </div>
                <div className="hidden md:grid grid-rows-2 gap-2 h-full">
                    {property.images.slice(1, 3).map((img, idx) => (
                        <div key={idx} className="relative w-full h-full">
                            <Image
                                src={img}
                                alt={`${property.title} gallery ${idx + 2}`}
                                fill
                                className="object-cover"
                                sizes="25vw"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Main Content Area */}
            <div className="container mx-auto px-6 max-w-[1400px] py-16 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Left Column: Details */}
                    <div className="lg:col-span-7 flex flex-col">
                        <div className="mb-12">
                            <div className="flex justify-between items-start mb-6">
                                <h1 className="text-4xl md:text-6xl font-serif tracking-tighter leading-none">{property.title}</h1>
                            </div>
                            <p className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-8">
                                {property.location.address}, {property.location.city}, {property.location.state} {property.location.zipCode}
                            </p>

                            <div className="flex gap-12 py-8 border-y border-border/40">
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Asking Price</p>
                                    <p className="text-2xl font-serif">${(property.price / 1000000).toFixed(1)}M</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Bedrooms</p>
                                    <p className="text-2xl font-serif">{property.features.beds}</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Bathrooms</p>
                                    <p className="text-2xl font-serif">{property.features.baths}</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Area</p>
                                    <p className="text-2xl font-serif">{(property.features.sqft / 1000).toFixed(1)}k <span className="text-base text-muted-foreground italic">sqft</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-lg dark:prose-invert max-w-none font-light leading-relaxed mb-16">
                            <h3 className="font-serif text-3xl mb-6">The Vision</h3>
                            <p>{property.description}</p>
                        </div>

                        <div className="mb-16">
                            <h3 className="font-serif text-3xl mb-8">Amenities</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 border-t border-border pt-8">
                                {property.amenities.map((amenity) => (
                                    <li key={amenity} className="flex items-center text-lg font-light tracking-wide">
                                        <span className="w-1.5 h-1.5 bg-primary mr-4" />
                                        {amenity}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Virtual Tour - Embedded 3D Viewer Placeholder */}
                        {property.virtualTourUrl && (
                            <div className="mb-16 border border-border p-2">
                                <h3 className="text-xs uppercase tracking-[0.2em] font-medium p-4 border-b border-border/40 mb-2">Immersive Media</h3>
                                <div className="aspect-video w-full bg-muted relative flex items-center justify-center overflow-hidden group cursor-pointer">
                                    {/* For demo purposes, we fake the iframe load or show a placeholder */}
                                    <Image src={property.images[0]} alt="3D Tour Preview" fill className="object-cover opacity-50 group-hover:opacity-40 transition-opacity" />
                                    <div className="absolute z-10 flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-full border border-foreground flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-primary group-hover:text-primary transition-all duration-300">
                                            <span className="font-serif text-2xl ml-1">▸</span>
                                        </div>
                                        <span className="uppercase tracking-[0.2em] text-xs font-medium bg-background px-4 py-2 border border-border">Enter 3D Tour</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Map Section */}
                        <div className="mb-16">
                            <h3 className="font-serif text-3xl mb-8">Location</h3>
                            <div className="h-[400px] w-full border border-border">
                                <MapSearch properties={[property]} />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Agent & Inquiry */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-32 flex flex-col space-y-12">
                            <ContactForm title="Inquire" />
                            {agent && (
                                <div className="border border-border p-8 bg-muted/10">
                                    <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-8">Listing Agent</h3>
                                    <AgentCard agent={agent} />
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
