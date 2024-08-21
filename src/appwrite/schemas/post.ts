import { z } from "zod";


export const PostSchemaBase = z.object({
  $id: z.string().optional(),
  $createdAt: z.date().or(z.string()).optional(),
  $updatedAt: z.date().or(z.string()).optional(),
  title: z.string().max(255, "Maximum length of 255 characters exceeded"),
  content: z.string().max(20000, "Maximum length of 20000 characters exceeded"),
  authorId: z.string().max(36, "Maximum length of 36 characters exceeded"),
  categoryId: z.string().max(36, "Maximum length of 36 characters exceeded"),
  slug: z.string().max(255, "Maximum length of 255 characters exceeded"),
  tags: z.array(z.string().max(255, "Maximum length of 255 characters exceeded")).nullish(),
  featuredImageId: z.string().max(30, "Maximum length of 30 characters exceeded").nullish(),
});

export type PostBase = z.infer<typeof PostSchemaBase>;

export const PostSchema: z.ZodType<PostBase> = PostSchemaBase;
export type Post = z.infer<typeof PostSchema>;

