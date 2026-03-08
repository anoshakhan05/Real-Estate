"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const NAV_LINKS = [
    { name: "Portfolio", href: "/properties" },
    { name: "Agents", href: "/agents" },
    { name: "Maison", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={clsx(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
                    scrolled ? "bg-background/90 backdrop-blur-md border-border py-4" : "bg-transparent py-8"
                )}
            >
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <div className="flex items-center justify-between">
                        {/* Logo - Serif Typography for Elegance */}
                        <Link
                            href="/"
                            className="text-2xl font-serif font-medium tracking-tighter uppercase relative z-50 mix-blend-difference text-white"
                        >
                            Nexa
                            <span className="text-primary ml-1">.</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-12">
                            {NAV_LINKS.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={clsx(
                                            "text-sm uppercase tracking-[0.2em] font-medium transition-colors hover:text-primary relative group",
                                            isActive ? "text-primary" : "text-foreground"
                                        )}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-indicator"
                                                className="absolute -bottom-2 left-0 right-0 h-[1px] bg-primary"
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden relative z-50 p-2 mix-blend-difference text-white"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Fullscreen Mobile Navigation Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-10%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-10%" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 bg-background flex flex-col justify-center px-6"
                    >
                        <nav className="flex flex-col space-y-8">
                            {NAV_LINKS.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-5xl font-serif uppercase tracking-tighter hover:text-primary transition-colors flex items-center"
                                    >
                                        <span className="text-sm font-sans tracking-[0.2em] text-muted-foreground mr-6 mt-2">
                                            0{idx + 1}
                                        </span>
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-16 pt-8 border-t border-border"
                        >
                            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">Inquiries</p>
                            <a href="mailto:contact@nexaestate.com" className="text-xl font-serif hover:text-primary transition-colors">
                                contact@nexaestate.com
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
