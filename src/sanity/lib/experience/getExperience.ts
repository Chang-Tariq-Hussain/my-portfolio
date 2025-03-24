import {defineQuery} from "groq";
import {sanityFetch} from "../live";

export async function getExperience() {
    const getExperienceQuery = defineQuery('*[_type == "experience"]')
    const experiences = await sanityFetch({
        query: getExperienceQuery,
    })
    return experiences.data;
}