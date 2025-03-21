import React from 'react';
import NavButton from "@/components/navbar/NavButton";

const navItems = [
    {
        label: "Home",
        ariaLabel: "Navigate to home section",
        href:'/',
        id:'#home',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round" className="lucide lucide-house dark:text-white group-hover:text-black dark:group-hover:text-black" aria-hidden="true">
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>
        ),
        isActive: true,
    },
    {
        label: "Skills & Expertise",
        ariaLabel: "Navigate to skills section",
        href:'/skills',
        id:'#skills',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round" className="lucide lucide-code dark:text-white group-hover:text-black dark:group-hover:text-black" aria-hidden="true">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
        ),
        isActive: false,
    },
    {
        label: "Academic Journey",
        ariaLabel: "Navigate to education section",
        href:'/education',
        id:'#education',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round" className="lucide lucide-graduation-cap dark:text-white group-hover:text-black dark:group-hover:text-black" aria-hidden="true">
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                <path d="M22 10v6"></path>
                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
            </svg>
        ),
        isActive: false,
    },
    {
        label: "Experience",
        ariaLabel: "Navigate to experience section",
        href:'/experience',
        id:'#experience',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round" className="lucide lucide-briefcase dark:text-white group-hover:text-black dark:group-hover:text-black" aria-hidden="true">
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                <rect width="20" height="14" x="2" y="6" rx="2"></rect>
            </svg>
        ),
        isActive: false,
    },
    {
        label: "Projects",
        ariaLabel: "Navigate to projects section",
        href:'/projects',
        id:'#projects',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-app-window-mac"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/></svg>
        )
    }
];

export default function Navbar() {
    return (
        <div className={'absolute fixed right-6 inset-y-0 md:flex items-center z-30 hidden'}>
            <div className="rounded-full py-6 px-3 bg-white shadow-lg border border-gray-200 dark:bg-gray-950 dark:border-gray-700">
                <div className="flex flex-col space-y-6" role="menubar">
                    {navItems.map(({ label, ariaLabel, href, id,  icon, isActive }, index) => (
                        <div key={id} className="relative">
                            <NavButton label={label} ariaLabel={ariaLabel} href={href} id={id} icon={icon} isActive={isActive}/>
                            {index < navItems.length - 1 && (
                                <div className="absolute left-1/2 -translate-x-1/2 h-6 w-px dark:bg-gray-200 bg-green-600/20 top-full"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
