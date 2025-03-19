import {defineQuery} from "groq";
import {sanityFetch} from "../live";

export async function getSkills() {
    const getSkillsQuery = defineQuery('*[_type == "skill"]')
    const skills = await sanityFetch({
        query: getSkillsQuery,
    })

    return skills.data;
}