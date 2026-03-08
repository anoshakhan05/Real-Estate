import { PropertyCard } from "@/components/property/PropertyCard";
import propertiesData from "@/data/properties.json";
import { type Property } from "@/types";

export function FeaturedProperties() {
    const featured = (propertiesData as Property[]).filter(p => p.featured);

    return (
        <section className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl">Featured Properties</h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Explore our curated selection of ultra-luxury estates and penthouses available now.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {featured.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            </div>
        </section>
    );
}
