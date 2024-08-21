import { z } from "zod";


export const CategorySchemaBase = z.object({
  $id: z.string().optional(),
  $createdAt: z.date().or(z.string()).optional(),
  $updatedAt: z.date().or(z.string()).optional(),
  name: z.string().max(255, "Maximum length of 255 characters exceeded"),
  slug: z.string().max(255, "Maximum length of 255 characters exceeded"),
  description: z.string().max(1000, "Maximum length of 1000 characters exceeded").nullish(),
  parentCategoryId: z.string().max(36, "Maximum length of 36 characters exceeded").nullish(),
});

export type CategoryBase = z.infer<typeof CategorySchemaBase>;

export const CategorySchema: z.ZodType<CategoryBase> = CategorySchemaBase;
export type Category = z.infer<typeof CategorySchema>;

