import { defineField, defineType } from 'sanity';
import {orderRankField} from "@sanity/orderable-document-list";

export const skillSchema = defineType({
    name: "skill",
    title: "Skills",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Skill Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "icon",
            title: "Skill Icon",
            type: "image",
            options: { hotspot: true },
        }),
        orderRankField({type: "skill"})
    ],
});
