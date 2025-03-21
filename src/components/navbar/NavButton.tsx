"use client"
import Link from "next/link";
import React, {useEffect, useState} from "react";

export interface NavButtonProps{
    label: string,
    ariaLabel: string,
    href: string,
    id: string,
    icon: string,
    isActive?: boolean
}
export default function NavButton({label, ariaLabel, id, icon}:NavButtonProps) {
    useEffect(() => {
        const handleScrollSpy = () => {
            const sections = document.querySelectorAll('[id]');
            let activeSectionId = '';

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                // Check if section is in viewport
                if (rect.top <= window.innerHeight * .25 && rect.bottom >= window.innerHeight * .25) {
                    activeSectionId = section.id;
                }
            });

            setHash(`#${activeSectionId}`); // Update the hash with the active section
        };

        handleScrollSpy(); // Check initially on load
        window.addEventListener("scroll", handleScrollSpy); // Listen for scroll events

        return () => window.removeEventListener("scroll", handleScrollSpy);
    }, []);
    const [hash, setHash] = useState("");

    useEffect(() => {
        const handleHashChange = () => {
            setHash(window.location.hash); // Remove the `#`
        };

        handleHashChange(); // Get initial hash on load
        window.addEventListener("hashchange", handleHashChange); // Listen for changes

        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => {
                window.location.hash = id; // Update URL hash
                setHash(id); // Ensure immediate update
            }, 100);
        }
    };
    const isActive = hash.length > 0 ? hash  === id : id === '#home';
    return (
        <Link onClick={handleClick}  href={id} className="relative group" role="menuitem" aria-label={ariaLabel}>
            <div
                className={`p-2 rounded-full transition-colors ${
                    isActive
                        ? "bg-green-600 text-white"
                        : "text-gray-800 hover:bg-gray-100 dark:text-white group-hover:bg-white group-hover:text-black dark:group-hover:text-black"
                }`}>
                {icon}
            </div>
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg
                      bg-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100
                      transition-opacity text-gray-800 border border-gray-200 dark:text-black">
            {label}
            </span>
        </Link>
    );
}