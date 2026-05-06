import prisma from './src/lib/db/index.js';
async function main() {
  const story = await prisma.story.findUnique({
    where: { id: 'cmjjkesfl0006vsvh8g4irre9' },
    include: { interactiveSlides: true }
  });
  console.log(JSON.stringify(story, null, 2));
}
main();
