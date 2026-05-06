import { PrismaClient } from './src/lib/db/prisma/generated/client';
const prisma = new PrismaClient();
async function main() {
  const slides = await prisma.interactiveSlide.findMany({
    where: { contentText: { not: null } }
  });
  console.log(slides);
}
main().catch(console.error).finally(() => prisma.$disconnect());
