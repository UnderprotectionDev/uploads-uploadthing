import { CollectionNameForm } from "@/components/upload-form";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <CollectionNameForm />
      </div>
    </div>
  );
}
