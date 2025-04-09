import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const socialLinks = [
        {
            href: "https://github.com/chang-tariq-hussain",
            label: "GitHub",
            icon: <Github className="w-6 h-6" />,
        },
        {
            href: "https://www.linkedin.com/in/tariq-hussain-chang-a6686223b/",
            label: "LinkedIn",
            icon: <Linkedin className="w-6 h-6" />,
        },
        {
            href: "mailto:chang.tariq48@gmail.com",
            label: "Email",
            icon: <Mail className="w-6 h-6" />,
        },
    ];
    return (
        <div className={'w-full h-32 bg-gray-950 text-white'}>
            <div className={'flex items-center justify-between w-[98%] mx-auto md:w-[93%] lg:[w-90%] xl:w-[85%] h-full'}>
                <div className={'flex items-center gap-4'}>
                    <div className={'px-4 py-2 border-b-4 border-r-4 border-b-green-800 border-r-green-500 h-fit'}>
                        <strong>Dev.Tariq</strong>
                    </div>
                    <div className={'text-sm opacity-80'}>
                        © {new Date().getFullYear()} Dev.Tariq. All rights reserved.
                    </div>
                </div>
                
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
            </div>
        </div>
    )
}