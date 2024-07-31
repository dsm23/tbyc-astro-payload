import type { Block } from "payload";

export const RichText: Block = {
  slug: "richText",
  fields: [
    {
      name: "content",
      label: "Content",
      type: "richText",
    },
  ],
};
