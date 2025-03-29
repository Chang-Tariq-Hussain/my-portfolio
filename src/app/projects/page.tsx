import Heading from "@/components/heading/Heading";
import ProjectCard, { ProjectCardProps } from "@/components/project-card/ProjectCard";
import { getProjects } from "../../sanity/lib/project/Projects";

// const projects = [
//     {
//         title: "Portfolio Website",
//         description: "A modern portfolio built with Next.js, Tailwind CSS, and Sanity CMS.",
//         image: "/images/portfolio.png",
//         techStack: ["Next.js", "Tailwind CSS", "Sanity CMS"],
//         liveLink: "https://yourportfolio.com",
//         githubLink: "https://github.com/yourusername/portfolio",
//     },
//     {
//         title: "E-commerce Store",
//         description: "A full-stack e-commerce platform using Next.js, Stripe, and Sanity.",
//         image: "/images/ecommerce.png",
//         techStack: ["Next.js", "Stripe", "Sanity CMS"],
//         liveLink: "https://yourstore.com",
//         githubLink: "https://github.com/yourusername/ecommerce",
//     },
//     {
//         title: "E-commerce Store",
//         description: "A full-stack e-commerce platform using Next.js, Stripe, and Sanity.",
//         image: "/images/ecommerce.png",
//         techStack: ["Next.js", "Stripe", "Sanity CMS"],
//         liveLink: "https://yourstore.com",
//         githubLink: "https://github.com/yourusername/ecommerce",
//     },
// ];
export default async function ProjectsPage() {
    const projects = await getProjects();
    console.log("projects")
    return (
        <section id='projects' className='min-h-screen pt-20'>
            <Heading text={'Projects'}/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project as ProjectCardProps} />
                ))}
            </div>
        </section>
    )
}

