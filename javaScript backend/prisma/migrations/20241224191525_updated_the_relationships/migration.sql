/*
  Warnings:

  - You are about to drop the column `commentId` on the `reactions` table. All the data in the column will be lost.
  - Added the required column `PostID` to the `reactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "reactions" DROP CONSTRAINT "reactions_commentId_fkey";

-- AlterTable
ALTER TABLE "reactions" DROP COLUMN "commentId",
ADD COLUMN     "PostID" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_PostID_fkey" FOREIGN KEY ("PostID") REFERENCES "posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
