import Heading from "@/components/heading/Heading";
import ThemeTimeline from '@/components/theme-timeline/ThemeTimeline';
import {getExperience} from "@/sanity/lib/experience/getExperience";

export default async function ExperiencePage () {
    const experienceData = await getExperience();
    return (
        <section id='experience' className='min-h-screen pt-10'>
            <Heading text={'Experience'}/>
            <ThemeTimeline experienceData={experienceData}/>
        </section>
    )
}