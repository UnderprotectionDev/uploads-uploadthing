import { z } from "zod";

export const collectionSchema = z.object({
  collectionName: z.string().min(2, {
    message: "Collection name must be at least 2 characters.",
  }),
});

export type CollectionSchemaType = z.infer<typeof collectionSchema>;
