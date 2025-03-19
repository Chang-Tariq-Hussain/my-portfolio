import {defineQuery} from "groq";
import {sanityFetch} from "../live";

export async function getProjects() {
    const getProjectsQuery = defineQuery('*[_type == "project"]')
    const projects = await sanityFetch({
        query: getProjectsQuery,
    })
    console.log("projects data>>> ", projects.data);
    return projects.data;
}