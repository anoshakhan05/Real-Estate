"use client";

import { useState } from "react";

export function PropertyGallery({ images }: { images: string[] }) {
    const [activeImage, setActiveImage] = useState(images[0]);

    return (
        <div className="space-y-4">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={activeImage} alt="Property featured image" className="h-full w-full object-cover transition-opacity duration-300" />
            </div>

            {images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveImage(img)}
                            className={`relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted transition-all hover:opacity-90 ${activeImage === img ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={img} alt={`Thumbnail ${idx + 1}`} className="h-full w-full object-cover" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
