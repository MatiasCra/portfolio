-- CreateTable
CREATE TABLE "Demo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,
    CONSTRAINT "Demo_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Demo_projectId_key" ON "Demo"("projectId");
