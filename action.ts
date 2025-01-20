import { flattenValidationErrors } from "next-safe-action";
import { actionClient } from "./lib/safe-action";
import { collectionSchema } from "./lib/validations";
import prisma from "./utils/prisma";

export const createCollection = actionClient
  .metadata({ actionName: "createCollection" })
  .schema(collectionSchema, {
    handleValidationErrorsShape: async (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .stateAction(async ({ parsedInput }) => {
    const { collectionName } = parsedInput;
    await prisma.collection.create({
      data: {
        collectionName,
      },
    });
  });
