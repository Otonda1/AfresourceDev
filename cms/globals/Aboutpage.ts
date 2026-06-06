import { GlobalConfig } from "payload";

export const Aboutpage: GlobalConfig = {
  slug: "aboutpage",
  fields: [
    {
      name: "hero",
      type: "group",
      fields: [
        { name: "headline", type: "text", required: true },
        { name: "subheadline", type: "textarea" },
      ],
    },
    {
      name: "insightBehind",
      label: "Inspiration Behind Afresource Section",
      type: "group",
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "description",
          type: "textarea",
        },
      ],
    },
    {
      name: "learship",
      label: "Leadership Perspective Section",
      type: "group",
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "name",
          label: "Your name",
          type: "text",
        },
        {
          name: "position",
          label: "What's your offical title at Afresource?",
          type: "text",
        },
        {
          name: "founderImage",
          label: "A Professional Portrait",
          type: "relationship",
          relationTo: "media",
          required: true,
          admin: {
            // This injects a clean visual helper message directly beneath the file input form field
            description:
              "Recommended Dimensions: 768px wide by 1024px tall (Aspect Ratio: 3:4). Max file size: 2MB.",
          },
        },
        {
          name: "description",
          type: "textarea",
        },
        {
          name: "framework",
          type: "group",
          fields: [
            { name: "title", type: "text" },
            { name: "description", type: "text" },
            {
              name: "pillars",
              type: "group",
              fields: [
                {
                  name: "first",
                  label: "Pillar One",
                  type: "text",
                },
                {
                  name: "firstDescription",
                  type: "textarea",
                },
                {
                  name: "second",
                  label: "Pillar Two",
                  type: "text",
                },
                {
                  name: "secondDescription",
                  type: "textarea",
                },
                {
                  name: "third",
                  label: "Pillar Three",
                  type: "text",
                },
                {
                  name: "thirdDescription",
                  type: "textarea",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
