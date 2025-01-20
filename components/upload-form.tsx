"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { collectionSchema } from "@/lib/validations";
import { CollectionSchemaType } from "@/lib/validations";
import { useStateAction } from "next-safe-action/stateful-hooks";
import { createCollection } from "@/action";

export function CollectionNameForm() {
  const { execute, status } = useStateAction(createCollection);

  const form = useForm<CollectionSchemaType>({
    resolver: zodResolver(collectionSchema),
    defaultValues: {
      collectionName: "",
    },
  });

  async function onSubmit(values: CollectionSchemaType) {
    await execute(values);
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create New Collection</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="collectionName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Collection Name</FormLabel>
                  <FormControl>
                    <Input placeholder="My Awesome Collection" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter a name for your new collection.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full"
              disabled={status === "executing"}
            >
              {status === "executing" ? "Creating..." : "Create Collection"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
