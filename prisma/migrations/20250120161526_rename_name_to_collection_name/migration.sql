-- CreateTable
CREATE TABLE "Collection" (
    "id" TEXT NOT NULL,
    "collectionName" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "galleryUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);
