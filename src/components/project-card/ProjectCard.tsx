"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, ExternalLink } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface ProjectCardProps {
    title: string;
    description: string;
    image: SanityImageSource;
    techStack: string[];
    liveDemo: string;
    github: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, techStack, liveDemo, github }) => {
    return (
        <motion.div
            whileHover={{
                scale: 1.05, // Slight lift effect
                rotateX: 5, // Tilt effect
                rotateY: 5,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", // Soft shadow on hover
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative"
        >
            <Card className="overflow-hidden rounded-2xl shadow-lg pb-6 pt-0 hover:shadow-sm transition duration-300 dark:bg-gray-900">
                {/* Project Image */}
                <div className="relative w-full h-56">
                    <Image src={image && urlFor(image).url()} alt={title} layout="fill" objectFit="cover" className="rounded-t-2xl" />
                </div>
                
                {/* Title & Description */}
                <CardHeader>
                    <CardTitle className="text-lg font-semibold">{title!}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-gray-600">{description!}</p>

                    {/* Tech Stack */}
                    <div className="mt-3 flex flex-wrap gap-2">
                        {techStack?.map((tech, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                                {tech}
                            </Badge>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-4 flex gap-4">
                        {/* Live Demo Button */}
                        <Button variant="default" asChild>
                            <a href={liveDemo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2" /> Live Demo
                            </a>
                        </Button>

                        {/* GitHub Button */}
                        <Button variant="outline" asChild>
                            <a href={github} target="_blank" rel="noopener noreferrer">
                                <GithubIcon className="mr-2" /> GitHub
                            </a>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default ProjectCard;
