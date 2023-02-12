-- CreateEnum
CREATE TYPE "ContentType" AS ENUM ('PAGE', 'POST', 'PROJECT');

-- CreateEnum
CREATE TYPE "ShareType" AS ENUM ('TWITTER', 'CLIPBOARD', 'OTHERS');

-- CreateEnum
CREATE TYPE "ReactionType" AS ENUM ('CLAPPING', 'THINKING', 'AMAZED');

-- CreateTable
CREATE TABLE "ContentMeta" (
    "_id" TEXT NOT NULL,
    "type" "ContentType" NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContentMeta_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "View" (
    "_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sessionId" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,

    CONSTRAINT "View_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Share" (
    "_id" TEXT NOT NULL,
    "type" "ShareType" DEFAULT 'OTHERS',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sessionId" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,

    CONSTRAINT "Share_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Reaction" (
    "_id" TEXT NOT NULL,
    "count" INTEGER DEFAULT 1,
    "section" TEXT,
    "type" "ReactionType" DEFAULT 'CLAPPING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sessionId" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,

    CONSTRAINT "Reaction_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ContentMeta_slug_key" ON "ContentMeta"("slug");

-- AddForeignKey
ALTER TABLE "View" ADD CONSTRAINT "View_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "ContentMeta"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Share" ADD CONSTRAINT "Share_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "ContentMeta"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction" ADD CONSTRAINT "Reaction_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "ContentMeta"("_id") ON DELETE CASCADE ON UPDATE CASCADE;
