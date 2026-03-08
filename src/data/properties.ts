import { Property } from "../types";
import { agents } from "./agents";

export const properties: Property[] = [
    {
        id: "prop-1",
        slug: "the-glass-pavilion",
        title: "The Glass Pavilion",
        description: "An architectural masterpiece floating above the city skyline. Floor-to-ceiling glass walls offer uninterrupted 360-degree views, perfectly marrying raw brutalist concrete with fragile transparency. Designed for those who demand the extraordinary, featuring a bespoke automated ecosystem, a suspended infinity pool, and an exclusive subterranean gallery space.",
        price: 18500000,
        location: {
            address: "8801 Skyline Drive",
            city: "Los Angeles",
            state: "CA",
            zipCode: "90069",
            coordinates: {
                lat: 34.1030,
                lng: -118.3965
            }
        },
        features: {
            beds: 5,
            baths: 7,
            sqft: 8500,
            propertyType: "Mansion",
            yearBuilt: 2023
        },
        amenities: [
            "Infinity Pool",
            "Home Theater",
            "Subterranean Gallery",
            "Smart Home Ecosystem",
            "Wine Cellar",
            "Helipad Access"
        ],
        images: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1627582311155-d362145b4dfb?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1627582311155-d362145b4dfb?q=80&w=2000&auto=format&fit=crop"
        ],
        featured: true,
        agentId: "agent-1",
        status: "For Sale",
        virtualTourUrl: "https://my.matterport.com/show/?m=example"
    },
    {
        id: "prop-2",
        slug: "brutalist-sanctuary",
        title: "Brutalist Sanctuary",
        description: "A striking study in board-formed concrete and warm walnut accents. This sanctuary offers ultimate privacy while embracing natural light through strategic skylights and internal courtyards. The minimalist aesthetic provides a blank canvas for curating a life of intention and quiet luxury.",
        price: 8900000,
        location: {
            address: "144 Minimalist Way",
            city: "Austin",
            state: "TX",
            zipCode: "78704",
            coordinates: {
                lat: 30.2500,
                lng: -97.7500
            }
        },
        features: {
            beds: 4,
            baths: 4,
            sqft: 5200,
            propertyType: "Villa",
            yearBuilt: 2024
        },
        amenities: [
            "Zen Garden",
            "Polished Concrete Floors",
            "Chef's Kitchen",
            "Private Studio",
            "Solar Integration"
        ],
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop"
        ],
        featured: true,
        agentId: "agent-2",
        status: "For Sale"
    },
    {
        id: "prop-3",
        slug: "horizon-penthouse",
        title: "Horizon Penthouse",
        description: "Crowning the city's most architecturally significant new tower, this penthouse redefines urban living. Featuring a dramatic double-height living space, a cantilevered terrace, and finishes sourced from rare quarries globally. A testament to ambition and sophisticated design.",
        price: 12450000,
        location: {
            address: "100 Highline Ave, PH-A",
            city: "New York",
            state: "NY",
            zipCode: "10001",
            coordinates: {
                lat: 40.7500,
                lng: -74.0000
            }
        },
        features: {
            beds: 3,
            baths: 4,
            sqft: 4800,
            propertyType: "Penthouse",
            yearBuilt: 2025
        },
        amenities: [
            "Cantilevered Terrace",
            "Private Elevator",
            "Concierge Service",
            "Spa & Wellness Center",
            "Automated Curtains"
        ],
        images: [
            "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600122283839-8fc806ce7e01?q=80&w=2000&auto=format&fit=crop"
        ],
        featured: true,
        agentId: "agent-3",
        status: "For Sale"
    },
    {
        id: "prop-4",
        slug: "the-monolith",
        title: "The Monolith Estate",
        description: "An uncompromising vision of modern living set on 12 pristine acres. The facade is clad in blackened steel and cedar, slowly patinating with the environment. Inside, expansive volumes create a gallery-like atmosphere perfect for art collectors and pure design purists.",
        price: 22000000,
        location: {
            address: "77 Ridge Road",
            city: "Aspen",
            state: "CO",
            zipCode: "81611",
            coordinates: {
                lat: 39.1911,
                lng: -106.8175
            }
        },
        features: {
            beds: 6,
            baths: 8,
            sqft: 11500,
            propertyType: "Mansion",
            yearBuilt: 2022
        },
        amenities: [
            "Heated Driveway",
            "Ski-in/Ski-out Access",
            "Indoor Lap Pool",
            "Equestrian Facilities",
            "Staff Quarters"
        ],
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2000&auto=format&fit=crop"
        ],
        featured: false,
        agentId: "agent-1",
        status: "For Sale"
    },
    {
        id: "prop-5",
        slug: "geometrica-townhouse",
        title: "Geometrica Townhouse",
        description: "A masterclass in urban density design. This vertical townhouse uses severe staggered geometry to maximize light and space over five floors. The raw steel staircase acts as the central spine, connecting the moody, intimate living spaces with a sun-drenched rooftop terrace.",
        price: 6500000,
        location: {
            address: "44 Urban Grid St",
            city: "Chicago",
            state: "IL",
            zipCode: "60601",
            coordinates: {
                lat: 41.8781,
                lng: -87.6298
            }
        },
        features: {
            beds: 4,
            baths: 5,
            sqft: 4000,
            propertyType: "Townhouse",
            yearBuilt: 2021
        },
        amenities: [
            "Rooftop Terrace",
            "Custom Steel Staircase",
            "Wine Room",
            "Smart Security",
            "Private Garage"
        ],
        images: [
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600585153215-d22731af7f5f?q=80&w=2000&auto=format&fit=crop"
        ],
        featured: false,
        agentId: "agent-2",
        status: "For Sale"
    },
    {
        id: "prop-6",
        slug: "shadow-line-villa",
        title: "Shadow Line Villa",
        description: "Designed strictly around the path of the sun, this coastal villa uses severe shadow lines and angular louvers to control light. The design is stark and uncompromising, sitting in sharp contrast to the organic curves of the surrounding coastline. A true statement piece.",
        price: 15300000,
        location: {
            address: "1 Oceanic Drive",
            city: "Malibu",
            state: "CA",
            zipCode: "90265",
            coordinates: {
                lat: 34.0259,
                lng: -118.7798
            }
        },
        features: {
            beds: 5,
            baths: 6,
            sqft: 7200,
            propertyType: "Villa",
            yearBuilt: 2024
        },
        amenities: [
            "Private Beach Access",
            "Zero Edge Pool",
            "Automated Louvers",
            "Home Gym",
            "Outdoor Kitchen"
        ],
        images: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
        ],
        featured: true,
        agentId: "agent-3",
        status: "For Sale"
    }
];

export function getFeaturedProperties() {
    return properties.filter(p => p.featured);
}

export function getPropertyBySlug(slug: string) {
    return properties.find(p => p.slug === slug);
}

export function getAllTags() {
    const allAmenities = properties.flatMap(p => p.amenities);
    return Array.from(new Set(allAmenities));
}
