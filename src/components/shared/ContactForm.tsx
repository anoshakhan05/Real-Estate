"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export function ContactForm({ title = "Inquire About This Property" }: { title?: string }) {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setTimeout(() => {
            setStatus("success");
        }, 1500);
    };

    return (
        <div className="bg-background border border-border p-8 h-full flex flex-col justify-center">
            <h3 className="text-3xl font-serif mb-8">{title}</h3>

            {status === "success" ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-primary/10 text-primary p-6 border border-primary/20"
                >
                    <p className="font-sans tracking-widest uppercase text-sm font-medium">Inquiry Sent Successfully</p>
                    <p className="mt-2 text-foreground/80 font-light">An agent will be in touch with you shortly to assist with your request.</p>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="name" className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">Full Name</label>
                        <input
                            id="name"
                            type="text"
                            required
                            className="bg-transparent border-b border-border pb-2 focus:outline-none focus:border-primary transition-colors text-lg placeholder:text-muted-foreground/30 rounded-none w-full"
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label htmlFor="email" className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            required
                            className="bg-transparent border-b border-border pb-2 focus:outline-none focus:border-primary transition-colors text-lg placeholder:text-muted-foreground/30 rounded-none w-full"
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label htmlFor="phone" className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">Phone Number</label>
                        <input
                            id="phone"
                            type="tel"
                            className="bg-transparent border-b border-border pb-2 focus:outline-none focus:border-primary transition-colors text-lg placeholder:text-muted-foreground/30 rounded-none w-full"
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label htmlFor="message" className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">Message</label>
                        <textarea
                            id="message"
                            required
                            rows={4}
                            className="bg-transparent border-b border-border pb-2 focus:outline-none focus:border-primary transition-colors text-lg placeholder:text-muted-foreground/30 rounded-none w-full resize-none"
                            defaultValue="I am interested in learning more about this property."
                        />
                    </div>

                    <Button type="submit" disabled={status === "submitting"} className="w-full mt-4">
                        {status === "submitting" ? "Sending..." : "Submit Inquiry"}
                    </Button>
                </form>
            )}
        </div>
    );
}
