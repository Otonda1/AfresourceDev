import { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticDir: "media",
    mimeTypes: ["image/*"], // Restrict files strictly to images
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 1024,
        position: "centre",
      },
    ],
  },
  access: {
    read: () => true, // Ensure your Next.js application can publicly read the uploaded image files
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      label: "Alt Text",
      admin: {
        description:
          "Provide descriptive text for screen readers and search engines.",
      },
    },
  ],
};
