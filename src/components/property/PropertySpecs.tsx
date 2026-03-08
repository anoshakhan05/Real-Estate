import { type Property } from "@/types";
import { Bed, Bath, Square, Home, Calendar, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function PropertySpecs({ property }: { property: Property }) {
    return (
        <div className="space-y-8">
            <section>
                <h2 className="mb-4 font-serif text-2xl font-bold">About This Property</h2>
                <p className="whitespace-pre-wrap leading-relaxed text-muted-foreground">{property.description}</p>
            </section>

            <section>
                <h2 className="mb-4 font-serif text-2xl font-bold">Property Details</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    <Card className="border-none bg-muted/50 shadow-none">
                        <CardContent className="flex items-center gap-4 p-4">
                            <Bed className="h-8 w-8 text-primary/60" />
                            <div>
                                <p className="text-sm text-muted-foreground">Bedrooms</p>
                                <p className="font-semibold">{property.features.beds}</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-none bg-muted/50 shadow-none">
                        <CardContent className="flex items-center gap-4 p-4">
                            <Bath className="h-8 w-8 text-primary/60" />
                            <div>
                                <p className="text-sm text-muted-foreground">Bathrooms</p>
                                <p className="font-semibold">{property.features.baths}</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-none bg-muted/50 shadow-none">
                        <CardContent className="flex items-center gap-4 p-4">
                            <Square className="h-8 w-8 text-primary/60" />
                            <div>
                                <p className="text-sm text-muted-foreground">Square Feet</p>
                                <p className="font-semibold">{property.features.sqft.toLocaleString()}</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-none bg-muted/50 shadow-none">
                        <CardContent className="flex items-center gap-4 p-4">
                            <Home className="h-8 w-8 text-primary/60" />
                            <div>
                                <p className="text-sm text-muted-foreground">Property Type</p>
                                <p className="font-semibold">{property.features.propertyType}</p>
                            </div>
                        </CardContent>
                    </Card>
                    {property.features.yearBuilt && (
                        <Card className="border-none bg-muted/50 shadow-none">
                            <CardContent className="flex items-center gap-4 p-4">
                                <Calendar className="h-8 w-8 text-primary/60" />
                                <div>
                                    <p className="text-sm text-muted-foreground">Year Built</p>
                                    <p className="font-semibold">{property.features.yearBuilt}</p>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </section>

            <section>
                <h2 className="mb-4 font-serif text-2xl font-bold">Amenities</h2>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3">
                    {property.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                            <span className="text-muted-foreground">{amenity}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
