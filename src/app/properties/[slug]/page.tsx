import { notFound } from "next/navigation";
import propertiesData from "@/data/properties.json";
import { type Property } from "@/types";
import { PropertyGallery } from "@/components/property/PropertyGallery";
import { PropertySpecs } from "@/components/property/PropertySpecs";
import { InquiryForm } from "@/components/property/InquiryForm";
import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function generateStaticParams() {
    const properties = propertiesData as Property[];
    return properties.map((property) => ({
        slug: property.id,
    }));
}

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
    const property = (propertiesData as Property[]).find((p) => p.id === params.slug);

    if (!property) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
            {/* Header Info */}
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                    <div className="mb-2 inline-block rounded bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                        {property.status}
                    </div>
                    <h1 className="mb-2 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">{property.title}</h1>
                    <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-2 h-5 w-5" />
                        <span className="text-lg">{property.location.address}, {property.location.city}, {property.location.state} {property.location.zipCode}</span>
                    </div>
                </div>
                <div className="text-left md:text-right">
                    <p className="font-serif text-4xl font-bold text-primary">${property.price.toLocaleString()}</p>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                {/* Left Column (Gallery & Specs) */}
                <div className="space-y-12 lg:col-span-2">
                    <PropertyGallery images={property.images} />
                    <PropertySpecs property={property} />
                </div>

                {/* Right Column (Inquiry Form) */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24">
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-serif text-2xl">Contact Agent</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <InquiryForm propertyId={property.id} />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
