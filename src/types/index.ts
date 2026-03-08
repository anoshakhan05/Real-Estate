export interface Property {
    id: string;
    slug: string;
    title: string;
    description: string;
    price: number;
    location: {
        address: string;
        city: string;
        state: string;
        zipCode: string;
        coordinates?: {
            lat: number;
            lng: number;
        }
    };
    features: {
        beds: number;
        baths: number;
        sqft: number;
        propertyType: string;
        yearBuilt?: number;
    };
    amenities: string[];
    images: string[];
    featured: boolean;
    agentId: string;
    status: 'For Sale' | 'For Rent' | 'Sold';
    virtualTourUrl?: string;
}

export interface Agent {
    id: string;
    name: string;
    role: string;
    email: string;
    phone: string;
    image: string;
    bio: string;
    social: {
        linkedin?: string;
        twitter?: string;
        instagram?: string;
    }
}
