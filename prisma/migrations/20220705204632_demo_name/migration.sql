-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Demo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,
    CONSTRAINT "Demo_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Demo" ("description", "id", "link", "projectId") SELECT "description", "id", "link", "projectId" FROM "Demo";
DROP TABLE "Demo";
ALTER TABLE "new_Demo" RENAME TO "Demo";
CREATE UNIQUE INDEX "Demo_projectId_key" ON "Demo"("projectId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
