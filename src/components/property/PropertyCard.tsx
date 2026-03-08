import Link from "next/link";
import { type Property } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Bed, Bath, Square, MapPin } from "lucide-react";

interface PropertyCardProps {
    property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
    return (
        <Card className="group overflow-hidden transition-all hover:shadow-lg">
            <Link href={`/properties/${property.id}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={property.images[0]}
                        alt={property.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
                        {property.status}
                    </div>
                    <div className="absolute bottom-4 left-4 rounded bg-black/60 px-2 py-1 text-lg font-bold text-white backdrop-blur">
                        ${property.price.toLocaleString()}
                    </div>
                </div>
            </Link>

            <CardContent className="p-4">
                <Link href={`/properties/${property.id}`}>
                    <h3 className="line-clamp-1 font-serif text-xl font-bold hover:text-primary">{property.title}</h3>
                </Link>
                <div className="mt-2 flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4 shrink-0" />
                    <span className="line-clamp-1">{property.location.address}, {property.location.city}, {property.location.state}</span>
                </div>
            </CardContent>

            <CardFooter className="flex items-center justify-between border-t p-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    <span>{property.features.beds} Beds</span>
                </div>
                <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    <span>{property.features.baths} Baths</span>
                </div>
                <div className="flex items-center gap-1">
                    <Square className="h-4 w-4" />
                    <span>{property.features.sqft.toLocaleString()} sqft</span>
                </div>
            </CardFooter>
        </Card>
    );
}
