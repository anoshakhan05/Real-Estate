"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { Property } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

// Fix for default marker icons in Leaflet when rendering in React
const icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
});

function ChangeView({ center, zoom }: { center: [number, number]; zoom: number }) {
    const map = useMap();
    useEffect(() => {
        map.setView(center, zoom);
    }, [center, zoom, map]);
    return null;
}

export default function MapClient({ properties }: { properties: Property[] }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="w-full h-full bg-muted flex items-center justify-center font-sans tracking-widest text-muted-foreground uppercase text-xs">Loading Map...</div>;

    // Calculate center based on properties or default to LA
    const defaultCenter: [number, number] = properties.length > 0 && properties[0].location.coordinates
        ? [properties[0].location.coordinates.lat, properties[0].location.coordinates.lng]
        : [34.0522, -118.2437]; // LA

    return (
        <div className="w-full h-full relative z-0">
            <MapContainer
                center={defaultCenter}
                zoom={11}
                scrollWheelZoom={false}
                className="w-full h-full pb-8"
                style={{ height: "100%", width: "100%" }}
            >
                <ChangeView center={defaultCenter} zoom={11} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />

                {properties.map((property) => {
                    if (!property.location.coordinates) return null;

                    return (
                        <Marker
                            key={property.id}
                            position={[property.location.coordinates.lat, property.location.coordinates.lng]}
                            icon={icon}
                        >
                            <Popup className="custom-popup">
                                <div className="flex flex-col w-[240px] !m-0 !p-0">
                                    <div className="relative w-full h-[160px] overflow-hidden">
                                        <Image
                                            src={property.images[0]}
                                            alt={property.title}
                                            fill
                                            className="object-cover"
                                            sizes="240px"
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col bg-background border border-border">
                                        <h4 className="font-serif text-lg leading-tight mb-1 truncate text-foreground">{property.title}</h4>
                                        <p className="font-sans font-medium text-foreground mb-3">${(property.price / 1000000).toFixed(1)}M</p>
                                        <div className="flex justify-between text-xs tracking-widest uppercase text-muted-foreground mb-4">
                                            <span>{property.features.beds} Bed</span>
                                            <span>{property.features.baths} Bath</span>
                                        </div>
                                        <Link href={`/property/${property.slug}`} className="w-full">
                                            <Button variant="primary" size="sm" className="w-full h-8 text-[10px]">View Details</Button>
                                        </Link>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
            <style jsx global>{`
        .leaflet-popup-content-wrapper {
          padding: 0;
          border-radius: 0;
          overflow: hidden;
          background: transparent;
          box-shadow: none;
        }
        .leaflet-popup-content {
          margin: 0;
          width: 240px !important;
        }
        .leaflet-popup-tip-container {
          display: none;
        }
        .leaflet-container {
          font-family: var(--font-inter), sans-serif;
        }
      `}</style>
        </div>
    );
}
