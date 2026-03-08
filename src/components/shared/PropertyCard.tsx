"use client";

import Image from "next/image";
import Link from "next/link";
import { Property } from "@/types";
import { motion } from "framer-motion";

export function PropertyCard({ property, index = 0 }: { property: Property; index?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col w-full h-full"
        >
            <Link href={`/property/${property.slug}`} className="block relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-muted mb-6">
                <Image
                    src={property.images[0]}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

                {/* Metric Overlay - Sharp, stark contrast */}
                <div className="absolute top-4 left-4 flex gap-2">
                    {property.featured && (
                        <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] px-3 py-1 font-medium">
                            Featured
                        </span>
                    )}
                </div>
            </Link>

            <div className="flex flex-col flex-1 pl-4 border-l border-border/40 group-hover:border-primary transition-colors duration-300">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-serif text-foreground leading-tight group-hover:text-primary transition-colors">
                        {property.title}
                    </h3>
                    <p className="text-lg font-sans font-medium text-foreground whitespace-nowrap ml-4">
                        ${(property.price / 1000000).toFixed(1)}M
                    </p>
                </div>

                <p className="text-sm font-sans text-muted-foreground uppercase tracking-wider mb-6">
                    {property.location.city}, {property.location.state}
                </p>

                <div className="grid grid-cols-3 gap-4 mt-auto border-t border-border/30 pt-4 text-xs tracking-widest uppercase text-muted-foreground">
                    <div className="flex flex-col">
                        <span className="text-foreground font-medium text-lg font-serif mb-1">{property.features.beds}</span>
                        Beds
                    </div>
                    <div className="flex flex-col">
                        <span className="text-foreground font-medium text-lg font-serif mb-1">{property.features.baths}</span>
                        Baths
                    </div>
                    <div className="flex flex-col">
                        <span className="text-foreground font-medium text-lg font-serif mb-1">{(property.features.sqft / 1000).toFixed(1)}k</span>
                        Sq Ft
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
