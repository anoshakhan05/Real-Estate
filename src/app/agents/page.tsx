import { agents } from "@/data/agents";
import { AgentCard } from "@/components/shared/AgentCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Partners | Nexa Estate",
    description: "Meet our senior partners and curated listing agents.",
};

export default function AgentsPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="mb-24">
                    <p className="text-xs uppercase tracking-[0.2em] text-primary mb-8 font-medium">The Firm</p>
                    <h1 className="text-5xl md:text-8xl font-serif tracking-tighter leading-[0.9] mb-8">
                        Our <span className="text-muted-foreground italic font-light">Partners.</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/80 max-w-3xl">
                        A boutique collective of industry veterans, each bringing deep architectural knowledge and uncompromising discretion.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                    {agents.map((agent, index) => (
                        <AgentCard key={agent.id} agent={agent} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
