// import {getSkills} from "@/sanity/lib/skill/Skills";
// import {Skill} from "../../sanity.types";
// import Image from "next/image";
// import {urlFor} from "@/sanity/lib/image";
import HeroSection from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/Container";
import SkillsPage from "./skills/page";
import EducationPage from "./education/page";
import ExperiencePage from "./experience/page";
import ProjectsPage from "./projects/page";
import ContactPage from "./contact/page";

export default async function Home() {
    // const skills:Skill[] = await getSkills();
  return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
          {/*<ul>*/}
          {/*    {skills.map((skill) => <Image key={skill._id} bg-gray-800alt={skill.name || "skill"} width={300} height={300} src={urlFor(skill.icon).url() || ""}></Image>)}*/}
          {/*</ul>*/}
          <Container>
              <HeroSection/>
              <SkillsPage/>
              <EducationPage/>
              <ExperiencePage/>
              <ProjectsPage/>
              <ContactPage/>
          </Container>

      </div>
  );
}