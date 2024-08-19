import { PrismaClient } from '@prisma/client';
import passwordService from "../service/passwordService";

const prisma = new PrismaClient();
async function main() {
    const { hashedPassword, salt } = await passwordService.hashPassword('password')
    await prisma.user.upsert({
      where: { email: 'thangqn@email.com'},
      update: {},
      create: {
        email: 'thangqn@email.com',
        hashedPassword,
        salt,
        firstName: 'Thang',
        lastName: 'Quach'
      }
    })
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
