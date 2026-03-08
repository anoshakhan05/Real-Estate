import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/shared/PropertyCard";
import { SearchFilter } from "@/components/shared/SearchFilter";
import { MapSearch } from "@/components/shared/MapSearch";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Nexa Estate",
    description: "Browse our exclusive collection of luxury real estate properties.",
};

export default function PropertiesPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    // Extract search params
    const location = typeof searchParams.location === "string" ? searchParams.location.toLowerCase() : "";
    const type = typeof searchParams.type === "string" ? searchParams.type : "";
    const minPrice = typeof searchParams.minPrice === "string" ? parseInt(searchParams.minPrice) : 0;
    const maxPrice = typeof searchParams.maxPrice === "string" ? parseInt(searchParams.maxPrice) : Infinity;
    const beds = typeof searchParams.beds === "string" ? parseInt(searchParams.beds) : 0;

    // Filter properties
    const filteredProperties = properties.filter((p) => {
        const matchLocation = location
            ? p.location.city.toLowerCase().includes(location) ||
            p.location.state.toLowerCase().includes(location) ||
            p.location.address.toLowerCase().includes(location)
            : true;
        const matchType = type ? p.features.propertyType === type : true;
        const matchMinPrice = minPrice ? p.price >= minPrice : true;
        const matchMaxPrice = maxPrice && maxPrice < Infinity ? p.price <= maxPrice : true;
        const matchBeds = beds ? p.features.beds >= beds : true;

        return matchLocation && matchType && matchMinPrice && matchMaxPrice && matchBeds;
    });

    return (
        <div className="min-h-screen bg-background pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-[1400px]">

                {/* Header Section */}
                <div className="mb-16">
                    <h1 className="text-5xl md:text-7xl font-serif tracking-tighter mb-6">
                        The <span className="text-primary italic">Portfolio.</span>
                    </h1>
                    <p className="text-xl text-muted-foreground font-light max-w-2xl leading-relaxed">
                        An uncompromising selection of architectural masterpieces and exclusive estates.
                    </p>
                </div>

                {/* Search & Map Split Section */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mb-24">
                    <div className="xl:col-span-12">
                        <SearchFilter />
                    </div>
                    <div className="xl:col-span-12 h-[50vh] min-h-[400px]">
                        <MapSearch properties={filteredProperties} />
                    </div>
                </div>

                {/* Results Info */}
                <div className="flex justify-between items-end mb-12 border-b border-border pb-6">
                    <h2 className="text-3xl font-serif">
                        {filteredProperties.length} <span className="text-muted-foreground">Properties Found</span>
                    </h2>
                </div>

                {/* Property Grid */}
                {filteredProperties.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {filteredProperties.map((property, index) => (
                            <PropertyCard key={property.id} property={property} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="py-24 text-center flex flex-col items-center justify-center border border-border bg-muted/20">
                        <h3 className="text-2xl font-serif mb-4">No Properties Found</h3>
                        <p className="text-muted-foreground mb-8">Adjust your search criteria to discover more exclusive listings.</p>
                    </div>
                )}

            </div>
        </div>
    );
}
