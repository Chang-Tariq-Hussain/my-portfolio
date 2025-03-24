"use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

// export const experienceData = [
//     {
//         title: "Frontend Developer",
//         company: "TekRevol",
//         date: "June 2024 - Dec 2024",
//         description: "" +
//             "Global digital transformation company offering product development services. " +
//             "Implemented core features for an e-commerce website using React JS." +
//             "Developed and customized screens to provide tailored functionality for different user roles (guest, brand, user, employee)." +
//             "Integrated Dual language support which included Arabic and English by using I18next." +
//             "Integrated RESTful APIs to fetch and manage dynamic data, ensuring smooth communication between the front-end and backend for the e-commerce website. ",
//     },
//     {
//         title: "Web Developer",
//         company: "IT Panda",
//         date: "July 2023 - March 2024",
//         description: "Worked on responsive design and API integrations using Next.js and Express.",
//     },
//     {
//         title: "MERN Stack Trainee",
//         company: "Contour Software - Karachi",
//         date: "2023",
//         description: "Gained immense knowledge of MERN stack development from highly experience employees.",
//     },
// ];

export interface IExpereince{
    role: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
}
export default function ExperienceTimeline({experienceData}: {experienceData: IExpereince[]}) {
    return (
        <section id="experience" className="py-16">
            {/*<h2 className="text-3xl font-bold text-center mb-10">Experience</h2>*/}

            <div className="max-w-5xl mx-auto flex flex-col relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 top-0 h-full w-[3px] bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2"></div>

                <Accordion type="single" collapsible className="w-full">
                    {experienceData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`flex items-center w-full mb-8 ${
                                index % 2 === 0 ? "justify-start" : "justify-end"
                            }`}
                        >
                            {/* Collapsible Timeline Card */}
                            <div className="relative w-5/12">
                                <AccordionItem value={`item-${index}`} className="border-none">
                                    <AccordionTrigger className="bg-white no-underline hover:no-underline cursor-pointer dark:bg-gray-950 p-6 rounded-lg shadow-lg border dark:border-gray-800 flex justify-between items-center w-full text-left">
                                        <div className="flex items-center gap-3">
                                            <Briefcase className="text-green-600 w-6 h-6" />
                                            <div>
                                                <h3 className="text-lg font-semibold">{item.role}</h3>
                                                <small className={'text-gray-500'}>{item.company}</small>
                                            </div>
                                        </div>
                                        {/*<ChevronDown className="w-5 h-5 text-gray-500" />*/}
                                    </AccordionTrigger>

                                    <AccordionContent className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md mt-2">
                                        <p className="text-green-600 font-bold text-sm">{item.company}</p>
                                        <p className="text-gray-500 text-xs">{`${item.startDate} to ${item.endDate}`}</p>
                                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                                            <ul className="list-disc market:text-green-600 p-4">
                                                {item.description
                                                    .split('.')
                                                    .filter(point => point.trim() !== '')
                                                    .map((point, index) => (
                                                        <li key={index} className="mb-2">{point.trim()}</li>
                                                    ))}
                                            </ul>
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </div>

                            {/* Timeline Circle */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-600 border-4 border-white dark:border-gray-900 rounded-full"></div>
                        </motion.div>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
