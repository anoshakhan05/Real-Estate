"use client";

import Image from "next/image";
import { Agent } from "@/types";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function AgentCard({ agent, index = 0 }: { agent: Agent; index?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col w-full bg-background"
        >
            <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image
                    src={agent.image}
                    alt={agent.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 border border-transparent group-hover:border-primary/20 transition-colors duration-500 z-10 pointer-events-none" />
            </div>

            <div className="flex flex-col border-t border-border pt-6">
                <h3 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">
                    {agent.name}
                </h3>
                <p className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mt-2 mb-6">
                    {agent.role}
                </p>

                <p className="text-sm text-foreground/80 font-light leading-relaxed mb-8 line-clamp-3">
                    {agent.bio}
                </p>

                <div className="mt-auto grid grid-cols-2 gap-4 border-t border-border/40 pt-6">
                    <a
                        href={`mailto:${agent.email}`}
                        className="text-xs uppercase tracking-widest hover:text-primary flex items-center group/link transition-colors"
                    >
                        Email
                        <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                    <a
                        href={`tel:${agent.phone}`}
                        className="text-xs uppercase tracking-widest hover:text-primary flex items-center group/link transition-colors justify-end"
                    >
                        Call
                        <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
