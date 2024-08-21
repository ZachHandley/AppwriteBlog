import { z } from "zod";


export const AuthorSchemaBase = z.object({
  $id: z.string().optional(),
  $createdAt: z.date().or(z.string()).optional(),
  $updatedAt: z.date().or(z.string()).optional(),
  name: z.string().max(255, "Maximum length of 255 characters exceeded"),
  email: z.string().max(255, "Maximum length of 255 characters exceeded"),
  bio: z.string().max(1000, "Maximum length of 1000 characters exceeded").nullish(),
  avatar: z.string().max(255, "Maximum length of 255 characters exceeded").nullish(),
  socialLinks: z.array(z.string().max(255, "Maximum length of 255 characters exceeded")).nullish(),
  slug: z.string().max(255, "Maximum length of 255 characters exceeded"),
});

export type AuthorBase = z.infer<typeof AuthorSchemaBase>;

export const AuthorSchema: z.ZodType<AuthorBase> = AuthorSchemaBase;
export type Author = z.infer<typeof AuthorSchema>;

