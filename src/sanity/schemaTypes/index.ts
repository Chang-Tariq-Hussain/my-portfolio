import { type SchemaTypeDefinition } from 'sanity'
import {projectSchema} from "@/sanity/schemaTypes/projectSchema";
import {experienceSchema} from "@/sanity/schemaTypes/experienceSchema";
import {skillSchema} from "@/sanity/schemaTypes/skillSchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectSchema, skillSchema, experienceSchema],
}
