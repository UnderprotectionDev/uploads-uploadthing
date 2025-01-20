"use server";

import { flattenValidationErrors } from "next-safe-action";
import { actionClient } from "./lib/safe-action";
import { collectionSchema } from "./lib/validations";
import prisma from "./utils/prisma";
import { z } from "zod";

export const createCollection = actionClient
  .metadata({ actionName: "createCollection" })
  .schema(collectionSchema, {
    handleValidationErrorsShape: async (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .bindArgsSchemas<
    [avatarUrl: z.ZodString, galleryUrls: z.ZodArray<z.ZodString>]
  >([z.string().url(), z.array(z.string().url())])
  .stateAction(
    async ({ parsedInput, bindArgsParsedInputs: [avatarUrl, galleryUrls] }) => {
      const { collectionName } = parsedInput;

      await prisma.collection.create({
        data: {
          collectionName,
          avatarUrl: avatarUrl ?? "",
          galleryUrl: galleryUrls,
        },
      });
    }
  );
