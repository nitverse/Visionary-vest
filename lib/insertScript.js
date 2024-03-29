const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

const prisma = new PrismaClient();

// async function main() {
//   const data = fs.readFileSync('./influencers.json', 'utf-8');
//   const influencers = JSON.parse(data);
//
//   for (const influencer of influencers) {
//     await prisma.influencer.create({
//       data: {
//         id: influencer.id,
//         name: influencer.name,
//         age: influencer.age,
//         image: influencer.image,
//         content: { set: influencer.content },
//         last1MonthEarnings: influencer.last1MonthEarnings,
//         last6MonthsEarnings: influencer.last6MonthsEarnings,
//         last12MonthsEarnings: influencer.last12MonthsEarnings,
//         currentPrice: influencer.currentPrice,
//       },
//     });
//   }
// }

// main()
//   .catch((e) => {
//     throw e;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

async function insertStocks() {
const data = fs.readFileSync('./stocks.json', 'utf-8');
  const stocks = JSON.parse(data);

  for (const stock of stocks) {
    await prisma.stockHolding.create({
      data: {
        influencerId: stock.influencerId,
        buyPrice: stock.buyPrice,
        quantity: stock.quantity,
        userId: stock.userId
      },
    });
  }
}

insertStocks()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    console.log("INSERTEDSUCCESSFULLY")
    await prisma.$disconnect();
  });