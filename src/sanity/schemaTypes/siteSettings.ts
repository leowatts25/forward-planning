import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Contact Email",
      description: "Shown on the Contact page and in the footer.",
      type: "string",
      validation: (r) => r.required().email(),
    }),
    defineField({
      name: "facebook",
      title: "Facebook Link",
      type: "url",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn Link",
      type: "url",
    }),
    defineField({
      name: "podcast",
      title: "Podcast Link",
      description: "The Podcast link in the footer.",
      type: "url",
    }),
    defineField({
      name: "calendlyUrl",
      title: "Booking Link (Calendly)",
      description:
        "Paste your Calendly scheduling link here to turn on online booking on the Contact page. Leave empty to show a \"coming soon\" message.",
      type: "url",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
