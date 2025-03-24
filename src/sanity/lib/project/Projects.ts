import {defineQuery} from "groq";
import {sanityFetch} from "../live";

export async function getProjects() {
    const getProjectsQuery = defineQuery('*[_type == "project"]')
    const projects = await sanityFetch({
        query: getProjectsQuery,
    })
    return projects.data;
}