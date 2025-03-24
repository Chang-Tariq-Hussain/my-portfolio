"use client";

import Heading from "@/components/heading/Heading";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck } from "lucide-react";
import React from "react";

export interface IEducation{
    type: string;
    title: string;
    institution: string;
    year: string;
    icon: React.ReactNode;
}
const educationAndBootcamp:IEducation[] = [
    {
        type: "Education",
        title: "Bachelor's in Computer Science",
        institution: "The Shaikh Ayaz University Shikarpur",
        year: "2019 - 2023",
        icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
    },
    {
        type: "Bootcamp",
        title: "MERN Stack",
        institution: "Contour Software - Karachi",
        year: "2023",
        icon: <BadgeCheck className="w-6 h-6 text-green-500" />,
    },
];

const certifications:Omit<IEducation, "type">[] = [
    {
        title: "Frontend development with React",
        institution: "Coursera",
        year: "2022",
        icon: <BadgeCheck className="w-6 h-6 text-yellow-500" />,
    },
    {
        title: "Backend Development with Express and Node.JS",
        institution: "Coursera",
        year: "2022",
        icon: <BadgeCheck className="w-6 h-6 text-yellow-500" />,
    },
    {
        title: "Introduction to Deep Learning",
        institution: "Coursera",
        year: "2022",
        icon: <BadgeCheck className="w-6 h-6 text-yellow-500" />,
    },
];

export default function EducationSection() {
    return (
        <section id="education" className="min-h-screen pt-16">
            <Heading text={"Education"} />

            {/* Two-column Layout */}
            <div className="grid grid-cols-1 pt-10 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {/* Left Column: Education & Bootcamps */}
                <div className="flex flex-col gap-6">
                    {educationAndBootcamp.map((item, index) => (
                        <div key={index}>
                            <h3 className={'text-2xl mb-4'}>{item.type.toLowerCase() === 'bootcamp' ? 'Bootcamps' : 'Education'}</h3>
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <Card className="flex flex-row gap-4 p-4 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-950">
                                    {item.icon}
                                    <CardContent className="px-1">
                                        <CardTitle className="mb-2">{item.title}</CardTitle>
                                        <p className="text-sm text-gray-500">{item.institution}</p>
                                        <p className="text-sm text-gray-400">{item.year}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Right Column: Certifications */}
                <div className="flex flex-col gap-6">
                    <h3 className={'text-2xl -mb-2'}>Certifications</h3>
                    {certifications.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Card className="flex flex-row gap-4 p-4 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-950">
                                {item.icon}
                                <CardContent className="px-1">
                                    <CardTitle className="mb-2">{item.title}</CardTitle>
                                    <p className="text-sm text-gray-500">{item.institution}</p>
                                    <p className="text-sm text-gray-400">{item.year}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
