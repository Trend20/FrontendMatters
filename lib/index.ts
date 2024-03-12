import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  const testUserData = {
    username: "devenock",
    email: "enockomondi305@gmail.com",
    password: "1234",
    name: "Enock Omondi",
  };

  // Create the test user in the database
  const createdUser = await prisma.user.create({
    data: testUserData,
  });

  console.log("Test user created:", createdUser);
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
