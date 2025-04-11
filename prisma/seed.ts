import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.service.create({
    data: {
      name: "Website",
      status: "Operational",
    },
  });

  await prisma.service.create({
    data: {
      name: "API",
      status: "Degraded Performance",
    },
  });

  console.log("Seed data created.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
