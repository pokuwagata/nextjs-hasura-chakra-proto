-- CreateEnum
CREATE TYPE "Status" AS ENUM ('TODO', 'PROGRESS', 'DONE');

-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT E'TODO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);
