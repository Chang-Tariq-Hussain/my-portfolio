import React from 'react';


export default function Navbar() {
    return (
        <div className={'absolute right-6 inset-y-0 md:flex items-center z-30 hidden'}>
            <div className="rounded-full py-6 px-3 bg-white shadow-lg border border-gray-200 dark:bg-gray-950 dark:border-gray-700">
                <div className="flex flex-col space-y-6" role="menubar">
                    <button className="relative group" role="menuitem" aria-label="Navigate to home section"
                            aria-current="page">
                        <div className="p-2 rounded-full transition-colors bg-green-600 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="lucide lucide-house dark:text-white group-hover:text-black dark:group-hover:text-black" aria-hidden="true">
                                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                                <path
                                    d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            </svg>
                        </div>
                        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg
                  bg-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100
                  transition-opacity text-gray-800 border border-gray-200 dark:text-black">Home</span>
                        <div
                            className="absolute left-1/2 -translate-x-1/2 h-6 w-px dark:bg-gray-200 bg-green-600/20 top-full"></div>
                    </button>
                    <button className="relative group" role="menuitem" aria-label="Navigate to skills section">
                        <div className="p-2 rounded-full transition-colors text-gray-800 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="lucide lucide-code dark:text-white group-hover:text-black dark:group-hover:text-black" aria-hidden="true">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                        </div>
                        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg
                  bg-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100
                  transition-opacity text-gray-800 border border-gray-200">Skills &amp; Expertise</span>
                        <div
                            className="absolute left-1/2 -translate-x-1/2 h-6 w-px dark:bg-gray-200 bg-green-600/20 top-full"></div>
                    </button>
                    <button className="relative group" role="menuitem" aria-label="Navigate to education section">
                        <div className="p-2 rounded-full transition-colors text-gray-800 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="lucide lucide-graduation-cap dark:text-white group-hover:text-black dark:group-hover:text-black" aria-hidden="true">
                                <path
                                    d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                                <path d="M22 10v6"></path>
                                <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                            </svg>
                        </div>
                        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg
                  bg-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100
                  transition-opacity text-gray-800 border border-gray-200">Academic Journey</span>
                        <div
                            className="absolute left-1/2 -translate-x-1/2 h-6 w-px dark:bg-gray-200 bg-green-600/20 top-full"></div>
                    </button>
                    <button className="relative group" role="menuitem" aria-label="Navigate to experience section">
                        <div className="p-2 rounded-full transition-colors text-gray-800 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="lucide lucide-briefcase dark:text-white group-hover:text-black dark:group-hover:text-black" aria-hidden="true">
                                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                            </svg>
                        </div>
                        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg
                  bg-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100
                  transition-opacity text-gray-800 border border-gray-200">Experience</span>
                        <div
                            className="absolute left-1/2 -translate-x-1/2 h-6 w-px dark:bg-gray-200 bg-green-600/20 top-full"></div>
                    </button>
                    <button className="relative group" role="menuitem" aria-label="Navigate to testimonials section">
                        <div className="p-2 rounded-full transition-colors text-gray-800 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="lucide lucide-message-square-quote dark:text-white group-hover:text-black dark:group-hover:text-black"
                                 aria-hidden="true">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                <path d="M8 12a2 2 0 0 0 2-2V8H8"></path>
                                <path d="M14 12a2 2 0 0 0 2-2V8h-2"></path>
                            </svg>
                        </div>
                        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg
                  bg-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100
                  transition-opacity text-gray-800 border border-gray-200">Testimonials</span></button>
                </div>
            </div>
        </div>
    );
}
