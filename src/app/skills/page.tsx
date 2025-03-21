import SkillCard from '@/components/skill-card/SkillCard'
import './skills.css'
import {getSkills} from "@/sanity/lib/skill/Skills";
import { Skill } from '../../../sanity.types';
export default async function SkillPage() {
    const skills = await getSkills();
    return (
        <section id='skills' className={'grid-container pt-20'}>
            {/*<h1 className={'text-5xl'}>Skill Page</h1>*/}
            {skills.map((skill:Skill, index:number) => <SkillCard key={index} name={skill.name} skillIcon={skill.icon}/>)}
        </section>
    )
}