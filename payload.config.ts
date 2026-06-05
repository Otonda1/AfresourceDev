import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import { Homepage } from "./cms/globals/Homepage";

export default buildConfig({
  admin: {
    user: "admins",
    meta: {
      titleSuffix: "— Afresource CMS",
    },
  },
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  globals: [Homepage],

  // Define and configure your collections in this array
  collections: [
    {
      slug: "admins",
      auth: true,
      fields: [],
    },
  ],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || "",
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
});
