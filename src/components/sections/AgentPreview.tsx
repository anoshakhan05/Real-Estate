import Link from "next/link";
import agentsData from "@/data/agents.json";
import { type Agent } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function AgentPreview() {
    const agents = (agentsData as Agent[]).slice(0, 4);

    return (
        <section className="bg-muted py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Luxury Brokers</h2>
                        <p className="max-w-2xl text-muted-foreground">
                            Work with the industry&apos;s most respected professionals to find your dream property.
                        </p>
                    </div>
                    <Button variant="outline" asChild>
                        <Link href="/agents">View All Agents</Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {agents.map(agent => (
                        <Card key={agent.id} className="overflow-hidden border-none bg-transparent shadow-none">
                            <CardContent className="p-0">
                                <div className="aspect-[3/4] overflow-hidden rounded-xl">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={agent.image}
                                        alt={agent.name}
                                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <div className="mt-4 text-center">
                                    <h3 className="font-serif text-xl font-bold">{agent.name}</h3>
                                    <p className="text-sm text-primary">{agent.role}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
