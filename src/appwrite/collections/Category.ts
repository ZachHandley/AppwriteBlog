import type { CollectionCreate } from "appwrite-utils";

const Category: Partial<CollectionCreate> = {
  $id: "01J5TXRZGJYP114V2GQCDV23YX",
  documentSecurity: false,
  enabled: true,
  name: "Category",
  $permissions: [
    { permission: "read", target: "any" },
    { permission: "create", target: "users" },
    { permission: "update", target: "users" },
    { permission: "delete", target: "users" },
  ],
  attributes: [
    { key: "name", type: "string", size: 255, required: true },
    { key: "slug", type: "string", size: 255, required: true },
    { key: "description", type: "string", size: 1000, required: false },
    { key: "parentCategoryId", type: "string", size: 36, required: false },
  ],
  indexes: [
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
    {
      key: "parent_category_index",
      type: "key",
      attributes: ["parentCategoryId"],
    },
  ],
};

export default Category;
