import { createId as cuid2 } from "@paralleldrive/cuid2";
import { PrismaClient } from "@prisma/client";
import type { Members, Events } from "@prisma/client";

const prisma = new PrismaClient();
import members from "./members.json";
import events from "./events.json";

(async function main() {
  for await (const member of members) {
    const { id, start_date, end_date, ...memberRest } = member;
    const toInsert: Members = {
      id: cuid2(),
      start_date: new Date(start_date.split(" ")[0]),
      end_date: new Date(start_date.split(" ")[0]),
      ...memberRest,
    };

    await prisma.members.upsert({
      where: { id: toInsert.id },
      update: toInsert,
      create: toInsert,
    });
  }

  for await (const event of events) {
    const { id, start_date, end_date, ...eventRest } = event;
    const toInsert: Events = {
      id: cuid2(),
      start_date: new Date(start_date.split(" ")[0]),
      end_date: new Date(start_date.split(" ")[0]),
      ...eventRest,
    };
    await prisma.events.upsert({
      where: { id: toInsert.id },
      update: toInsert,
      create: toInsert,
    });
  }
})()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
