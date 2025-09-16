import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Delete dependent records first:
  await prisma.bankAccount.deleteMany();
  await prisma.cSRFLab2.deleteMany();
  await prisma.cSRFLab3.deleteMany();
  await prisma.aCUser.deleteMany();
  await prisma.imageForApiHacking.deleteMany(); 
    await prisma.apiHackingLab.deleteMany();      
    await prisma.clickJackLab1.deleteMany();

  // CSRFLab1: Bank Accounts (example)
  await prisma.bankAccount.createMany({
    data: [
      {
        accountNo: '1234567890',
        accountPass: 'user',
        accountBalance: 1000.0,
        accountName: 'Ahmed',
      },
      {
        accountNo: '0987654321',
        accountPass: 'user2',
        accountBalance: 2000.0,
        accountName: 'Mohamed',
      },
      {
        accountNo: '1357924680',
        accountPass: 'user3',
        accountBalance: 3000.0,
        accountName: 'Ali',
      },
    ],
  });

  // CSRFLab2
  await prisma.cSRFLab2.createMany({
    data: [
      { authority: 'admin', password: 'admin' },
      { authority: 'user', password: 'user' },
      { authority: 'user1', password: 'user1' },
      { authority: 'user2', password: 'user2' },
    ],
  });

  // CSRFLab3
  await prisma.cSRFLab3.createMany({
    data: [
      { name: 'user1', balance: 7000 },
      { name: 'user2', balance: 10000 },
      { name: 'user3', balance: 5000 },
      { name: 'user4', balance: 2000 },
    ],
  });

  // AC_Vuln Lab1
  await prisma.aCUser.createMany({
    data: [
      { name: 'user1' },
      { name: 'user2' },
      { name: 'user3' },
      { name: 'user4' },
    ],
  });

  // AC_Vuln Lab2: apiHackingLab with nested images.
  await Promise.all([
    prisma.apiHackingLab.upsert({
      where: { username: 'admin' },
      update: {},
      create: {
        username: 'admin',
        password: 'admin',
        image: {
          create: [
            { name: 'Image 1', path: '../src/labs/apiHacking/lab2/images/1.jpg' },
            { name: 'Image 2', path: '../src/labs/apiHacking/lab2/images/2.jpg' },
            { name: 'Image 3', path: '../src/labs/apiHacking/lab2/images/3.jpg' },
            { name: 'Image 4', path: '../src/labs/apiHacking/lab2/images/4.jpg' },
            { name: 'Image 5', path: '../src/labs/apiHacking/lab2/images/5.jpg' },
            { name: 'Image 6', path: '../src/labs/apiHacking/lab2/images/6.jpg' },
            { name: 'Image 7', path: '../src/labs/apiHacking/lab2/images/7.jpg' },
            { name: 'Image 9', path: '../src/labs/apiHacking/lab2/images/9.jpg' },
            { name: 'Image 10', path: '../src/labs/apiHacking/lab2/images/10.jpg' },
            { name: 'Image 8', path: '../src/labs/apiHacking/lab2/images/11.jpg' },
            { name: 'Image 11', path: '../src/labs/apiHacking/lab2/images/12.jpg' },
          ],
        },
      },
      include: { image: true },
    }),
    prisma.apiHackingLab.upsert({
      where: { username: 'user' },
      update: {},
      create: {
        username: 'user',
        password: 'user',
        image: {
          create: [
            { name: 'Image 1', path: '../src/labs/apiHacking/lab2/images/1.jpg' },
            { name: 'Image 2', path: '../src/labs/apiHacking/lab2/images/2.jpg' },
            { name: 'Image 3', path: '../src/labs/apiHacking/lab2/images/3.jpg' },
            { name: 'Image 4', path: '../src/labs/apiHacking/lab2/images/4.jpg' },
            { name: 'Image 5', path: '../src/labs/apiHacking/lab2/images/5.jpg' },
            { name: 'Image 6', path: '../src/labs/apiHacking/lab2/images/6.jpg' },
            { name: 'Image 7', path: '../src/labs/apiHacking/lab2/images/7.jpg' },
            { name: 'Image 9', path: '../src/labs/apiHacking/lab2/images/9.jpg' },
            { name: 'Image 10', path: '../src/labs/apiHacking/lab2/images/10.jpg' },
            { name: 'Image 8', path: '../src/labs/apiHacking/lab2/images/11.jpg' },
            { name: 'Image 11', path: '../src/labs/apiHacking/lab2/images/12.jpg' },
          ],
        },
      },
      include: { image: false }
    }),
    prisma.apiHackingLab.upsert({
      where: { username: 'user2' },
      update: {},
      create: {
        username: 'user2',
        password: 'user2',
        image: {
          create: [
            { name: 'Image 1', path: '../src/labs/apiHacking/lab2/images/1.jpg' },
            { name: 'Image 2', path: '../src/labs/apiHacking/lab2/images/2.jpg' },
            { name: 'Image 3', path: '../src/labs/apiHacking/lab2/images/3.jpg' },
            { name: 'Image 4', path: '../src/labs/apiHacking/lab2/images/4.jpg' },
            { name: 'Image 5', path: '../src/labs/apiHacking/lab2/images/5.jpg' },
            { name: 'Image 6', path: '../src/labs/apiHacking/lab2/images/6.jpg' },
            { name: 'Image 7', path: '../src/labs/apiHacking/lab2/images/7.jpg' },
            { name: 'Image 9', path: '../src/labs/apiHacking/lab2/images/9.jpg' },
            { name: 'Image 10', path: '../src/labs/apiHacking/lab2/images/10.jpg' },
            { name: 'Image 8', path: '../src/labs/apiHacking/lab2/images/11.jpg' },
            { name: 'Image 11', path: '../src/labs/apiHacking/lab2/images/12.jpg' },
          ],
        },
      },
      include: { image: false }
    }),
    prisma.apiHackingLab.upsert({
      where: { username: 'user3' },
      update: {},
      create: {
        username: 'user3',
        password: 'user3',
        image: {
          create: [
            { name: 'Image 1', path: '../src/labs/apiHacking/lab2/images/1.jpg' },
            { name: 'Image 2', path: '../src/labs/apiHacking/lab2/images/2.jpg' },
            { name: 'Image 3', path: '../src/labs/apiHacking/lab2/images/3.jpg' },
            { name: 'Image 4', path: '../src/labs/apiHacking/lab2/images/4.jpg' },
            { name: 'Image 5', path: '../src/labs/apiHacking/lab2/images/5.jpg' },
            { name: 'Image 6', path: '../src/labs/apiHacking/lab2/images/6.jpg' },
            { name: 'Image 7', path: '../src/labs/apiHacking/lab2/images/7.jpg' },
            { name: 'Image 9', path: '../src/labs/apiHacking/lab2/images/9.jpg' },
            { name: 'Image 10', path: '../src/labs/apiHacking/lab2/images/10.jpg' },
            { name: 'Image 8', path: '../src/labs/apiHacking/lab2/images/11.jpg' },
            { name: 'Image 11', path: '../src/labs/apiHacking/lab2/images/12.jpg' },
          ],
        },
      },
      include: { image: false }
    })
  ]);

  // Clickjacking Lab1
  await prisma.clickJackLab1.createMany({
    data: [
      { username: 'user', password: 'user', email: 'user@example.com' },
      { username: 'user2', password: 'user2', email: 'user2@example.com' },
      { username: 'user3', password: 'user3', email: 'user3@example.com' },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
