import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class UserService {
  
  async findByEmail(email) {
    return await prisma.user.findUnique({
      where: {
        email: email ,
      },
    });
  }
}

export default new UserService();
