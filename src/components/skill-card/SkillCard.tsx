import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export interface SkillCardProps {
    name?: string;
    skillIcon?: string;
}

export default function SkillCard({ name, skillIcon }: SkillCardProps) {
    return (
        <div
            className="flex flex-col items-center justify-center rounded-lg p-4 w-full max-h-fit-content
                       bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg shadow-lg border border-gray-600/40
                       dark:border-gray-600/40 hover:border-opacity-80 transition-all duration-300
                       cursor-pointer select-none relative overflow-hidden transform hover:-translate-y-1
                       hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2
                       focus:ring-offset-2 focus:ring-green-500 focus:ring-opacity-50"
        >
            <Image src={urlFor(skillIcon!).url()} alt={name || 'skill'} width={96} height={96} className="size-20" />
            <small className="mt-4 text-gray-900 dark:text-white">{name}</small>
        </div>
    );
}
