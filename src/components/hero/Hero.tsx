"use client"
import React from "react";
import {Download, Github, Linkedin, Mail } from "lucide-react";
import {ReactTyped} from "react-typed";
import GradientButton from "@/components/ui/GradientButton";

const HeroSection: React.FC = () => {
    const socialLinks = [
        {
            href: "https://github.com/chang-tariq-hussain",
            label: "GitHub",
            icon: <Github className="w-6 h-6"/>,
        },
        {
            href: "https://www.linkedin.com/in/tariq-hussain-chang-a6686223b/",
            label: "LinkedIn",
            icon: <Linkedin className="w-6 h-6"/>,
        },
        {
            href: "mailto:chang.tariq48@gmail.com",
            label: "Email",
            icon: <Mail className="w-6 h-6"/>,
        },
    ];

    return (
        <section id='home' className="flex flex-col justify-center text-left min-h-screen pt-20 px-4">

            {/* Name */}
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
                I&apos;m <span className={'bg-gradient-to-r from-green-500 via-green-600 to-green-700 bg-clip-text text-transparent'}>Tariq Hussain Chang</span>
            </h1>

            {/* Typed Role Animation */}
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
                <ReactTyped
                    strings={[
                        "Full Stack Web Developer 🚀",
                        "MERN Stack Developer ⚛",
                        "Next.js, React Enthusiast 🇳",
                        "Building Scalable Applications 🔰"
                    ]}
                    typeSpeed={50}
                    backSpeed={30}
                    loop
                />
            </h2>

            {/* Description */}
            <p className="text-lg max-w-[90%] md:text-xl mb-8 lg:max-w-[70%] xl:max-w-[50%] ">
                I strive to develop web applications that are fast, accessible, and engaging. Whether it&apos;s an interactive UI, a complex backend system, or an optimized full-stack solution, my focus is on delivering exceptional digital experiences.
            </p>

            {/* Social Links */}
            <div className="flex space-x-6">
                {socialLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition"
                        aria-label={link.label}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
            <div className={'w-fit-content my-8'}>
                <GradientButton>
                    <a href="/cv.pdf" download="Tariq_Hussain_CV.pdf">
                        Download CV
                    </a>
                    <Download className="w-6 h-6 mr-2" />
                </GradientButton>
            </div>
        </section>
    );
};

export default HeroSection;
