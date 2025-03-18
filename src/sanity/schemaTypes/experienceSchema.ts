import { defineField, defineType } from 'sanity';

export const experienceSchema = defineType({
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        defineField({
            name: "company",
            title: "Company",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "role",
            title: "Role",
            type: "string",
        }),
        defineField({
            name: "startDate",
            title: "Start Date",
            type: "date",
        }),
        defineField({
            name: "endDate",
            title: "End Date",
            type: "date",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
    ],
});
