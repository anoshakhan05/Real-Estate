import { ContactForm } from "@/components/shared/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact The Firm | Nexa Estate",
    description: "Reach out to Nexa Estate to discuss your real estate requirements.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="mb-24">
                    <p className="text-xs uppercase tracking-[0.2em] text-primary mb-8 font-medium">Inquiries</p>
                    <h1 className="text-5xl md:text-8xl font-serif tracking-tighter leading-[0.9] mb-8">
                        Start the <span className="text-muted-foreground italic font-light">Dialogue.</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/80 max-w-3xl">
                        Whether you are considering a disposition of a prime asset or looking to acquire a legacy property, our partners are at your disposal.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
                    <div className="flex flex-col space-y-16">
                        <div>
                            <h2 className="text-2xl font-serif mb-6 text-foreground">Global Headquarters</h2>
                            <address className="not-italic flex flex-col space-y-2 text-lg font-light text-muted-foreground">
                                <span className="text-foreground font-medium">Nexa Estate</span>
                                <span>8801 Skyline Drive</span>
                                <span>Los Angeles, CA 90069</span>
                            </address>
                            <div className="mt-8 flex flex-col space-y-4">
                                <a href="tel:+15550192831" className="text-xl font-medium hover:text-primary transition-colors">+1 (555) 019-2831</a>
                                <a href="mailto:inquiries@nexaestate.com" className="text-xl font-medium hover:text-primary transition-colors">inquiries@nexaestate.com</a>
                            </div>
                        </div>

                        <div className="border-t border-border pt-16">
                            <h2 className="text-2xl font-serif mb-6 text-foreground">Press & Media</h2>
                            <div className="flex flex-col space-y-4">
                                <a href="mailto:press@nexaestate.com" className="text-xl font-medium hover:text-primary transition-colors">press@nexaestate.com</a>
                            </div>
                        </div>

                        <div className="border-t border-border pt-16">
                            <h2 className="text-2xl font-serif mb-6 text-foreground">Careers</h2>
                            <div className="flex flex-col space-y-4">
                                <a href="mailto:careers@nexaestate.com" className="text-xl font-medium hover:text-primary transition-colors">careers@nexaestate.com</a>
                            </div>
                        </div>
                    </div>

                    <div className="sticky top-32">
                        <ContactForm title="Direct Inquiry" />
                    </div>
                </div>
            </div>
        </div>
    );
}
