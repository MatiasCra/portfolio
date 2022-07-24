-- CreateTable
CREATE TABLE "Source" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "link" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,
    CONSTRAINT "Source_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Source_projectId_key" ON "Source"("projectId");
