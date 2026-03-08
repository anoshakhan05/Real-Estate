import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-foreground text-background py-24 px-6 relative overflow-hidden">
            {/* Abstract massive brand typography water mark */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5 flex items-center justify-center">
                <span className="text-[30vw] font-serif leading-none tracking-tighter mix-blend-overlay">NEXA</span>
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">

                    <div className="col-span-1 md:col-span-5">
                        <h2 className="text-4xl md:text-5xl font-serif tracking-tighter mb-8 leading-tight">
                            Invest in <br className="hidden md:block" />
                            <span className="text-primary italic">Architecture.</span>
                        </h2>
                        <p className="text-muted-foreground max-w-sm mb-12 font-sans font-light tracking-wide leading-relaxed">
                            Curating exceptional living spaces for those who demand the extraordinary. A new standard in luxury real estate.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="border border-border/20 p-4 hover:bg-primary hover:border-primary transition-all duration-300">
                                Instagram
                            </a>
                            <a href="#" className="border border-border/20 p-4 hover:bg-primary hover:border-primary transition-all duration-300">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-3 md:col-start-7">
                        <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">Navigation</h3>
                        <nav className="flex flex-col space-y-4">
                            {['Portfolio', 'Agents', 'Maison', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    href={`/${item.toLowerCase() === 'maison' ? 'about' : item.toLowerCase()}`}
                                    className="text-lg hover:text-primary transition-colors inline-flex items-center group w-max"
                                >
                                    <span className="group-hover:translate-x-2 transition-transform duration-300">{item}</span>
                                    <ArrowUpRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                        <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">Headquarters</h3>
                        <address className="not-italic flex flex-col space-y-2 text-lg text-muted-foreground">
                            <span>8801 Skyline Drive</span>
                            <span>Los Angeles, CA 90069</span>
                            <span className="mt-4 pt-4 border-t border-border/20 block text-background hover:text-primary transition-colors">
                                <a href="mailto:inquiries@nexaestate.com">inquiries@nexaestate.com</a>
                            </span>
                            <span className="text-background">+1 (555) 019-2831</span>
                        </address>
                    </div>

                </div>

                <div className="border-t border-border/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Nexa Estate. All rights reserved.</p>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-background transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
