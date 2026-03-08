import dynamic from "next/dynamic";
import { Property } from "@/types";

const MapClient = dynamic(() => import("./MapClient"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-muted flex flex-col items-center justify-center font-sans">
            <div className="animate-pulse w-12 h-12 border-2 border-primary border-t-transparent rounded-full mb-4" />
            <p className="tracking-widest text-muted-foreground uppercase text-xs">Loading Interactive Map...</p>
        </div>
    ),
});

export function MapSearch({ properties }: { properties: Property[] }) {
    return (
        <div className="w-full h-[600px] border border-border relative overflow-hidden bg-background">
            <MapClient properties={properties} />
        </div>
    );
}
