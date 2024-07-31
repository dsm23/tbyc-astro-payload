import type { CollectionConfig } from "payload";
import { Cover } from "~/blocks/cover/schema";
import { Image } from "~/blocks/image/schema";
import { RecentBlogPosts } from "~/blocks/recent-blog-posts/schema";
import { RichText } from "~/blocks/rich-text/schema";

export const Pages: CollectionConfig = {
  slug: "pages",
  fields: [
    {
      name: "name",
      type: "text",
      label: "Name",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      label: "Slug",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "layout",
      label: "Layout",
      type: "blocks",
      blocks: [Cover, RecentBlogPosts, RichText, Image],
    },
  ],
};
