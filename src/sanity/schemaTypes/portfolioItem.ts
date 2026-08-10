import { defineField, defineType } from "sanity";

export const portfolioItem = defineType({
  name: "portfolioItem",
  title: "Portfolio Item",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3 }),
    defineField({
      name: "details",
      title: "Details",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "imageAlt", title: "Image Alt Text", type: "string" }),
    defineField({ name: "imageCredit", title: "Image Credit", type: "string" }),
    defineField({
      name: "featuredIn",
      title: "As Featured In",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "url", title: "URL", type: "url" }),
          ],
        },
      ],
    }),
    defineField({
      name: "partners",
      title: "Corporate & Community Partners",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string" }),
            defineField({ name: "url", title: "URL", type: "url" }),
            defineField({ name: "note", title: "Note", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "video",
      title: "Video",
      type: "object",
      fields: [
        defineField({ name: "youtubeId", title: "YouTube Video ID", type: "string" }),
        defineField({ name: "title", title: "Video Title", type: "string" }),
      ],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      validation: (r) => r.required(),
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "category", media: "image" },
  },
});
