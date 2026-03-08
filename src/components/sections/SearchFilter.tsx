import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";

export function SearchFilter() {
    return (
        <div className="rounded-lg bg-background p-4 shadow-lg ring-1 ring-border sm:p-6">
            <form className="flex flex-col gap-4 md:flex-row md:items-end" onSubmit={(e) => e.preventDefault()}>
                <div className="flex-1 space-y-2">
                    <label htmlFor="location" className="text-sm font-medium">Location</label>
                    <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="location" placeholder="City, neighborhood, or zip" className="pl-9" />
                    </div>
                </div>

                <div className="flex-1 space-y-2">
                    <label htmlFor="propertyType" className="text-sm font-medium">Property Type</label>
                    <select
                        id="propertyType"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        <option value="">Any Type</option>
                        <option value="house">Single Family Home</option>
                        <option value="villa">Villa</option>
                        <option value="penthouse">Penthouse</option>
                        <option value="condo">Condo</option>
                    </select>
                </div>

                <div className="flex-1 space-y-2">
                    <label htmlFor="priceRange" className="text-sm font-medium">Max Price</label>
                    <select
                        id="priceRange"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        <option value="">Any Price</option>
                        <option value="1000000">$1,000,000</option>
                        <option value="2500000">$2,500,000</option>
                        <option value="5000000">$5,000,000</option>
                        <option value="10000000">$10,000,000+</option>
                    </select>
                </div>

                <Button type="submit" className="h-10 w-full md:w-auto">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                </Button>
            </form>
        </div>
    );
}
