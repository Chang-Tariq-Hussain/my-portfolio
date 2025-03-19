import {getSkills} from "@/sanity/lib/skill/Skills";
import {Skill} from "../../sanity.types";
import Image from "next/image";
import {urlFor} from "@/sanity/lib/image";
export default async function Home() {
    const skills:Skill[] = await getSkills();
  return (
      <div className="min-h-screen flex items-center justify-center">
          <ul>
              {skills.map((skill) => <Image key={skill._id} alt={skill.name || "skill"} width={300} height={300} src={urlFor(skill.icon).url() || ""}></Image>)}
          </ul>
      </div>
  );
}