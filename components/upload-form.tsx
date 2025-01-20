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
import { Label } from "./ui/label";
import Image from "next/image";

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
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">
          Create New Collection
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="collectionName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Collection Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="My Awesome Collection"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Enter a name for your new collection.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <Label className="text-base">Avatar</Label>
              {avatarImage ? (
                <Image
                  src={avatarImage}
                  alt="Uploaded Image"
                  width={200}
                  height={200}
                  className="size-[200px] object-cover rounded-full"
                />
              ) : (
                <div>
                  <UploadDropzone
                    endpoint="avatarUploader"
                    onClientUploadComplete={(res) => {
                      setAvatarImage(res[0].url);
                      toast.success("Avatar uploaded successfully.");
                    }}
                    onUploadError={() => {
                      toast.error("Avatar upload failed.");
                    }}
                    className="mt-2"
                  />
                </div>
              )}

              <div>
                <Label className="text-base">Gallery</Label>
                {galleryImages.length > 0 ? (
                  <div className="grid grid-cols-2 gap-4">
                    {galleryImages.map((image) => (
                      <Image
                        key={image}
                        src={image}
                        alt="Uploaded Image"
                        width={200}
                        height={200}
                        className="size-[200px] object-cover rounded-lg"
                      />
                    ))}
                  </div>
                ) : (
                  <UploadDropzone
                    endpoint="galleryUploader"
                    onClientUploadComplete={(res) => {
                      setGalleryImages(res.map((r) => r.url));
                      toast.success("Gallery images uploaded successfully.");
                    }}
                    onUploadError={() => {
                      toast.error("Gallery upload failed.");
                    }}
                    className="mt-2"
                  />
                )}
              </div>
            </div>

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
