'use client'
// Import necessary libraries and components
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import toast from "react-hot-toast";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const FormSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    mobileNumber: z.string().refine((value) => /^\d{10}$/.test(value), {
        message: "Enter a valid 10-digit mobile number.",
    }),
    studentClass: z.string(),
    subject: z.string(),
    address: z.string(),
});

export function Hero2() {


    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            mobileNumber: "",
            studentClass: "",
            subject: "",
            address: "",
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        const whatsappNumber = '+919876543210';
        
        const message = `Name: ${data.name}%0A` +
                        `Mobile Number: ${data.mobileNumber}%0A` +
                        `Class: ${data.studentClass}%0A` +
                        `Subject: ${data.subject}%0A` +
                        `Address: ${data.address}`;

        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');

        toast.success('Form submitted successfully!');
    }

    return (
        <main style={{
            background:'linear-gradient(180deg, #FFE789 0%, rgba(255, 242, 189, 0.00) 37.08%)'
        }} className=" w-full py-8 md:px-16 mt-16 px-5 flex justify-between items-center flex-col md:flex-row " >
            <div className="w-full " >
                <h1 className="md:text-[32px] text-center md:text-left text-[28px] " >Contact us now and secure your spot</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-3/4 space-y-4">

                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="mobileNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mobile Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="1234567890" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="w-full md:flex space-y-4 md:space-y-0 flex-row gap-2" >
                            <FormField
                                control={form.control}
                                name="studentClass"
                                render={({ field }) => (
                                    <FormItem className="flex-1" >
                                        <FormLabel>Class</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select class" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(t =>
                                                    <SelectItem value={`Class${t}`}>Class {t}</SelectItem>
                                                )}
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem className="flex-1" >
                                        <FormLabel>Subject</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a subject" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Maths"> Maths</SelectItem>
                                                <SelectItem value='Physics' > Physics</SelectItem >
                                                <SelectItem value='Physics' > Physics</SelectItem >
                                                <SelectItem value='Chemistry' > Chemistry</SelectItem >
                                                <SelectItem value='Biology' > Biology</SelectItem >
                                                <SelectItem value='Computer' > Computer</SelectItem >
                                                <SelectItem value='English' > English</SelectItem >
                                                <SelectItem value='Accounting' > Accounting</SelectItem >
                                                <SelectItem value='Economics' > Economics</SelectItem >
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Enter your address" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button className="rounded-full px-10 bg-customYellow hover:bg-customYellow hover:scale-105 transition-all duration-300 text-black" type="submit">Get Demo Class</Button>
                    </form>
                </Form>

                <div className="flex flex-row gap-2 items-center my-4 mt-8 text-xl md:text-2xl" ><FaPhoneAlt /> +919098798769</div>
                <div className="flex flex-row gap-2 items-center my-4 mb-3 text-xl md:text-2xl" ><FaLocationDot /> Available in Lucknow & Prayagraj</div>

            </div>

            <img className="w-max" src="/assets/contact.svg" alt="hero" />
        </main>
    );
}
