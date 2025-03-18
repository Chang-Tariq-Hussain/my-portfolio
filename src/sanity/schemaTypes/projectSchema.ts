import {defineField, defineType} from 'sanity';

export const projectSchema = defineType(
    {
        name: "project",
        title: "Projects",
        type: "document",
        fields: [
            defineField({
                name: "title",
                title: "Title",
                type: "string",
                validation: (Rule: { required: () => any; }) => Rule.required(),
            }),
            defineField({
                name: "slug",
                title: "Slug",
                type: "slug",
                options: { source: "title", maxLength: 96 },
            }),
            defineField({
                name: "description",
                title: "Description",
                type: "text",
            }),
            defineField({
                name: "techStack",
                title: "Tech Stack",
                type: "array",
                of: [{ type: "string" }],
            }),
            defineField({
                name: "github",
                title: "GitHub Link",
                type: "url",
            }),
            defineField({
                name: "liveDemo",
                title: "Live Demo Link",
                type: "url",
            }),
            defineField({
                name: "image",
                title: "Project Image",
                type: "image",
                options: { hotspot: true },
            }),
        ],
    }
)
