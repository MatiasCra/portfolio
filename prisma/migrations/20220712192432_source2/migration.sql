/*
  Warnings:

  - You are about to drop the `Source` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "Source_projectId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Source";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 1,
    "title" TEXT NOT NULL,
    "source" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Project" ("id", "order", "slug", "title") SELECT "id", "order", "slug", "title" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE UNIQUE INDEX "Project_slug_key" ON "Project"("slug");
CREATE UNIQUE INDEX "Project_title_key" ON "Project"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
