"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export function SearchFilter() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [location, setLocation] = useState(searchParams.get("location") || "");
    const [propertyType, setPropertyType] = useState(searchParams.get("type") || "");
    const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
    const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
    const [beds, setBeds] = useState(searchParams.get("beds") || "");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (location) params.set("location", location);
        if (propertyType) params.set("type", propertyType);
        if (minPrice) params.set("minPrice", minPrice);
        if (maxPrice) params.set("maxPrice", maxPrice);
        if (beds) params.set("beds", beds);

        router.push(`/properties?${params.toString()}`);
    };

    return (
        <div className="bg-background border border-border p-8 w-full">
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-5 xl:grid-cols-6 gap-6 items-end">
                <div className="flex flex-col space-y-2">
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">Location</label>
                    <input
                        type="text"
                        placeholder="City, State..."
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full bg-transparent border-b border-border pb-2 focus:outline-none focus:border-primary transition-colors text-lg placeholder:text-muted-foreground/50 rounded-none"
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">Type</label>
                    <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="w-full bg-transparent border-b border-border pb-2 focus:outline-none focus:border-primary transition-colors text-lg appearance-none rounded-none cursor-pointer"
                    >
                        <option value="">All Types</option>
                        <option value="Mansion">Mansion</option>
                        <option value="Villa">Villa</option>
                        <option value="Penthouse">Penthouse</option>
                        <option value="Townhouse">Townhouse</option>
                    </select>
                </div>

                <div className="flex flex-col space-y-2">
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">Min Price</label>
                    <select
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="w-full bg-transparent border-b border-border pb-2 focus:outline-none focus:border-primary transition-colors text-lg appearance-none rounded-none cursor-pointer"
                    >
                        <option value="">Any</option>
                        <option value="1000000">$1M</option>
                        <option value="5000000">$5M</option>
                        <option value="10000000">$10M</option>
                        <option value="20000000">$20M+</option>
                    </select>
                </div>

                <div className="flex flex-col space-y-2">
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">Max Price</label>
                    <select
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="w-full bg-transparent border-b border-border pb-2 focus:outline-none focus:border-primary transition-colors text-lg appearance-none rounded-none cursor-pointer"
                    >
                        <option value="">Any</option>
                        <option value="5000000">$5M</option>
                        <option value="10000000">$10M</option>
                        <option value="15000000">$15M</option>
                        <option value="30000000">$30M+</option>
                    </select>
                </div>

                <div className="flex flex-col space-y-2">
                    <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">Beds</label>
                    <select
                        value={beds}
                        onChange={(e) => setBeds(e.target.value)}
                        className="w-full bg-transparent border-b border-border pb-2 focus:outline-none focus:border-primary transition-colors text-lg appearance-none rounded-none cursor-pointer"
                    >
                        <option value="">Any</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                        <option value="5">5+</option>
                    </select>
                </div>

                <div className="md:col-span-5 xl:col-span-1 mt-6 xl:mt-0">
                    <Button type="submit" variant="primary" className="w-full h-[52px]">
                        Search
                    </Button>
                </div>
            </form>
        </div>
    );
}
