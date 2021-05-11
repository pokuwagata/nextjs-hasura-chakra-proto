import * as z from "zod";

export const GetResponseSchema = z.object({
  totalCount: z.number(),
  offset: z.number(),
  limit: z.number(),
});

export const PostResponseSchema = z.object({
  id: z.string(),
});

export const modelSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string(),
  revisedAt: z.string(),
});

export type PostResponse = z.infer<typeof PostResponseSchema>;

export * from "type";
