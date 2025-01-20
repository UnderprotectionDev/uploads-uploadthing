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
import { toast } from "sonner";
import { useState } from "react";
import { UploadDropzone } from "@/utils/uploadthing";

export function CollectionNameForm() {
  const [avatarImage, setAvatarImage] = useState<string | undefined>(undefined);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  const createCollectionWithBind = createCollection.bind(
    null,
    avatarImage ?? "",
    galleryImages
  );

  const { execute, status } = useStateAction(createCollectionWithBind);

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
            <UploadDropzone
              endpoint="avatarUploader"
              onClientUploadComplete={(res) => {
                setAvatarImage(res[0].url);
                toast.success("Collection created successfully.");
              }}
              onUploadError={() => {
                toast.error("Something went wrong.");
              }}
            />
            <UploadDropzone
              endpoint="galleryUploader"
              onClientUploadComplete={(res) => {
                setGalleryImages(res.map((r) => r.url));
                toast.success("Collection created successfully.");
              }}
              onUploadError={() => {
                toast.error("Something went wrong.");
              }}
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
