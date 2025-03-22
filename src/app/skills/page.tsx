import SkillCard from '@/components/skill-card/SkillCard'
import './skills.css'
import {getSkills} from "@/sanity/lib/skill/Skills";
import { Skill } from '../../../sanity.types';
import Heading from '@/components/heading/Heading';
export default async function SkillPage() {
    const skills = await getSkills();
    return (
        <section id='skills' className={'pt-20'}>
            {/*<h1 className={'text-5xl'}>Skill Page</h1>*/}
            <Heading text={'Technical Skills'}/>
            <div className={'grid-container'}>
                {skills.map((skill:Skill, index:number) => <SkillCard key={index} name={skill.name} skillIcon={skill.icon}/>)}
            </div>
        </section>
    )
}