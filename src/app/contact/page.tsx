"use client";
import Heading from "@/components/heading/Heading";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from '@emailjs/browser';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useRef } from "react";


export default function ContactPage() {
    const formRef = useRef<HTMLFormElement>(null);
    const formSchema = z.object({
        name: z.string().min(2, {
            message: "Name must be at least 2 characters.",
        }),
        email: z.string().email({
            message: "Please enter a valid email address.",
        }),
        message: z.string().min(10, {
            message: "Message must be at least 10 characters.",
        }),
    });
    

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // Handle form submission
        console.log(values);

        try{
            if (!process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID || 
                !process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID || 
                !process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY ||
                !formRef.current) {
                throw new Error('EmailJS environment variables are not configured or form is not available');
            }
            
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
            );
        }catch(error){
            console.log(error);
        }

    };

    return (
        <div id='contact' className="min-h-screen pt-20">
            <Heading text={'Contact'}/>
            <div className="max-w-md mx-auto mt-8">
                <Card className="shadow-lg dark:bg-gray-900">
                    <CardHeader>
                        <CardTitle>Send me a message</CardTitle>
                        <CardDescription>I&apos;ll get back to you as soon as possible.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="your@email.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Your message" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="w-full bg-green-600 text-white hover:bg-green-700 cursor-pointer">
                                    Send Message
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}