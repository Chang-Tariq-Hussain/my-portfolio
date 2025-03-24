import { type SchemaTypeDefinition } from 'sanity'
import {projectSchema} from "./projectSchema"
import {experienceSchema} from "./experienceSchema";
import {skillSchema} from "./skillSchema";
import {orderRankField, orderRankOrdering} from "@sanity/orderable-document-list";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectSchema, skillSchema, experienceSchema, {
    name: "category",
    title: "Category",
    type: "document",
    // Optional: The plugin also exports a set of 'orderings' for use in other Document Lists
    // https://www.sanity.io/docs/sort-orders
    orderings: [orderRankOrdering],
    fields: [
      // Minimum required configuration
      orderRankField({ type: "category" }),

      // // OR placing new documents on top
      // orderRankField({ type: "category", newItemPosition: "before" }),
      //
      // // OR you can override _some_ of the field settings
      // orderRankField({ type: "category", hidden: false }),

      // ...all other fields
    ],
  },],
}
