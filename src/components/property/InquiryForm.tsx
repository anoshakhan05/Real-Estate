"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const inquirySchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    phone: z.string().min(10, "Please enter a valid phone number."),
    message: z.string().min(10, "Message must be at least 10 characters."),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

export function InquiryForm({ propertyId }: { propertyId: string }) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<InquiryFormValues>({
        resolver: zodResolver(inquirySchema),
    });

    const onSubmit = async (data: InquiryFormValues) => {
        // Simulate API call for lead capture
        console.log("Inquiry Submitted for Property:", propertyId, data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert("Inquiry submitted successfully. An agent will contact you soon.");
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <Input placeholder="Your Name" {...register("name")} />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div>
                <Input type="email" placeholder="Your Email" {...register("email")} />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
            </div>
            <div>
                <Input type="tel" placeholder="Phone Number" {...register("phone")} />
                {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>}
            </div>
            <div>
                <Textarea placeholder="I am interested in this property..." {...register("message")} />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Request Information"}
            </Button>
        </form>
    );
}
