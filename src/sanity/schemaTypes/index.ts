import { type SchemaTypeDefinition } from 'sanity'
import {projectSchema} from "./projectSchema"
import {experienceSchema} from "./experienceSchema";
import {skillSchema} from "./skillSchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectSchema, skillSchema, experienceSchema],
}
