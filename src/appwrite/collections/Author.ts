import type { CollectionCreate } from "appwrite-utils";

const Author: Partial<CollectionCreate> = {
  $id: "01J5TXRW8K4X1P33G78XHKE8ZV",
  documentSecurity: false,
  enabled: true,
  name: "Author",
  $permissions: [
    { permission: "read", target: "any" },
    { permission: "create", target: "users" },
    { permission: "update", target: "users" },
    { permission: "delete", target: "users" },
  ],
  attributes: [
    { key: "name", type: "string", size: 255, required: true },
    { key: "email", type: "string", size: 255, required: true },
    { key: "bio", type: "string", size: 1000, required: false },
    { key: "avatar", type: "string", size: 255, required: false },
    {
      key: "socialLinks",
      type: "string",
      size: 255,
      array: true,
      required: false,
    },
    { key: "slug", type: "string", size: 255, required: true },
  ],
  indexes: [
    {
      key: "email_unique",
      type: "unique",
      attributes: ["email"],
    },
    {
      key: "slug_unique",
      type: "unique",
      attributes: ["slug"],
    },
    {
      key: "name_index",
      type: "key",
      attributes: ["name"],
    },
  ],
};

export default Author;
