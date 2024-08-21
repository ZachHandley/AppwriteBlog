import { type CollectionCreate } from "appwrite-utils";

const Post: Partial<CollectionCreate> = {
  name: "Post",
  $permissions: [
    { permission: "read", target: "any" },
    { permission: "create", target: "users" },
    { permission: "update", target: "users" },
    { permission: "delete", target: "users" },
  ],
  attributes: [
    { key: "title", type: "string", size: 255, required: true },
    { key: "content", type: "string", size: 20000, required: true },
    { key: "authorId", type: "string", size: 36, required: true },
    { key: "categoryId", type: "string", size: 36, required: true },
    { key: "slug", type: "string", size: 255, required: true },
    { key: "tags", type: "string", size: 255, array: true, required: false },
    { key: "featuredImageId", type: "string", size: 30, required: false },
  ],
  indexes: [
    {
      key: "content_search",
      type: "fulltext",
      attributes: ["title", "content"],
    },
    {
      key: "slug_unique",
      type: "unique",
      attributes: ["slug"],
    },
    {
      key: "author_index",
      type: "key",
      attributes: ["authorId"],
    },
    {
      key: "category_index",
      type: "key",
      attributes: ["categoryId"],
    },
  ],
  importDefs: [],
};

export default Post;
