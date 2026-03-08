"use client";

import { motion } from "framer-motion";

export function TestimonialCard({
    quote,
    author,
    role,
    index = 0,
}: {
    quote: string;
    author: string;
    role: string;
    index?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="border border-border p-8 md:p-12 flex flex-col justify-between group hover:border-primary transition-colors bg-background"
        >
            <div className="mb-12">
                <span className="text-primary font-serif text-6xl leading-none">&quot;</span>
                <p className="text-lg md:text-xl font-serif leading-relaxed mb-8 italic">
                    &quot;{quote}&quot;
                </p>
            </div>
            <div>
                <p className="font-sans font-medium text-foreground tracking-wide">{author}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{role}</p>
            </div>
        </motion.div>
    );
}
