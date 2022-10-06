import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export async function seed() {
  await prisma.states.createMany({
    data: [
      { state: 'active' },
      { state: 'pending' },
      { state: 'cancelled' },
      { state: 'disabled' },
      { state: 'approved' },
      { state: 'rejected' },
    ],
  });
  // await prisma.role.createMany({
  //   data: [{ role: 'admin' }, { role: 'user' }],
  // });

  // await prisma.category.createMany({
  //   data: [
  //     { category: 'Destacados' },
  //     { category: 'Tarjetas de video' },
  //     { category: 'Memorias' },
  //     { category: 'Motherboards' },
  //     { category: 'Procesadores' },
  //     { category: 'Gabinetes' },
  //     { category: 'Fuentes' },
  //   ],
  // });
  // await prisma.products.createMany({
  //   data: [
  //     {
  //       name: 'RTX 3090',
  //       imgUrl: '/img/Tarjetas de video/rtx 3090.jpg',
  //       categoryId: 1,
  //       price: 300000,
  //     },
  //     {
  //       name: 'RTX 3080ti',
  //       imgUrl: '/img/Tarjetas de video/rtx 3080ti.jpg',
  //       categoryId: 1,
  //       price: 250000,
  //     },
  //     {
  //       name: 'ASUS crosshair dark hero VIII',
  //       imgUrl: '/img/Mothers/ASUS crosshair dark hero VIII.jpg',
  //       categoryId: 1,
  //       price: 120000,
  //     },
  //     {
  //       name: 'Gskill trident z royal',
  //       imgUrl: '/img/RAMs/Gskill trident z royal.jpg',
  //       categoryId: 1,
  //       price: 85000,
  //     },
  //     {
  //       name: 'Hyperx Fury 8gb',
  //       imgUrl: '/img/RAMs/Hyperx Fury 8gb.jpg',
  //       categoryId: 1,
  //       price: 60000,
  //     },
  //     {
  //       name: 'RTX 3090',
  //       imgUrl: '/img/Tarjetas de video/rtx 3090.jpg',
  //       categoryId: 2,
  //       price: 300000,
  //     },
  //     {
  //       name: 'RTX 3080ti',
  //       imgUrl: '/img/Tarjetas de video/rtx 3080ti.jpg',
  //       categoryId: 2,
  //       price: 250000,
  //     },
  //     {
  //       name: 'RTX 3080',
  //       imgUrl: '/img/Tarjetas de video/rtx 3080.jpg',
  //       categoryId: 2,
  //       price: 200000,
  //     },
  //     {
  //       name: 'rx 6700 xt',
  //       imgUrl: '/img/Tarjetas de video/rx 6700 xt.jpg',
  //       categoryId: 2,
  //       price: 175000,
  //     },
  //     {
  //       name: 'rx6900 xt',
  //       imgUrl: '/img/Tarjetas de video/rx6900 xt.jpg',
  //       categoryId: 2,
  //       price: 200000,
  //     },
  //     {
  //       name: 'Corsair Vengeance lfx',
  //       imgUrl: '/img/RAMs/Corsair Vengeance lfx.jpg',
  //       categoryId: 3,
  //       price: 50000,
  //     },
  //     {
  //       name: 'Gskill trident z RGB',
  //       imgUrl: '/img/RAMs/Gskill trident z RGB.jpg',
  //       categoryId: 3,
  //       price: 75000,
  //     },
  //     {
  //       name: 'Gskill trident z royal',
  //       imgUrl: '/img/RAMs/Gskill trident z royal.jpg',
  //       categoryId: 3,
  //       price: 85000,
  //     },
  //     {
  //       name: 'Hyperx Fury 8gb',
  //       imgUrl: '/img/RAMs/Hyperx Fury 8gb.jpg',
  //       categoryId: 3,
  //       price: 60000,
  //     },
  //     {
  //       name: 'Patriot viper Rgb',
  //       imgUrl: '/img/RAMs/Patriot viper Rgb.jpg',
  //       categoryId: 3,
  //       price: 65000,
  //     },
  //     {
  //       name: 'ASUS crosshair dark hero VIII',
  //       imgUrl: '/img/Mothers/ASUS crosshair dark hero VIII.jpg',
  //       categoryId: 4,
  //       price: 120000,
  //     },
  //     {
  //       name: 'ASUS TUF gaming b450',
  //       imgUrl: '/img/Mothers/ASUS TUF gaming b450.jpg',
  //       categoryId: 4,
  //       price: 90000,
  //     },
  //     {
  //       name: 'Gigabyte Aorus z690 elite',
  //       imgUrl: '/img/Mothers/Gigabyte Aorus z690 elite.jpg',
  //       categoryId: 4,
  //       price: 98000,
  //     },
  //     {
  //       name: 'Gigabyte b660m gaming x',
  //       imgUrl: '/img/Mothers/Gigabyte b660m gaming x.jpg',
  //       categoryId: 4,
  //       price: 70000,
  //     },
  //     {
  //       name: 'MSI x570 ',
  //       imgUrl: '/img/Mothers/MSI x570 .jpg',
  //       categoryId: 4,
  //       price: 50000,
  //     },
  //     {
  //       name: 'Intel i9 11900k',
  //       imgUrl: '/img/Microprocesadores/Intel i9 11900k.jpg',
  //       categoryId: 5,
  //       price: 120000,
  //     },
  //     {
  //       name: 'Intel i9 11700',
  //       imgUrl: '/img/Microprocesadores/Intel i9 11700.jpg',
  //       categoryId: 5,
  //       price: 100000,
  //     },
  //     {
  //       name: 'AMD Ryzen 9 5950x',
  //       imgUrl: '/img/Microprocesadores/AMD Ryzen 9 5950x.jpg',
  //       categoryId: 5,
  //       price: 100000,
  //     },
  //     {
  //       name: 'AMD Ryzen 7 5800x',
  //       imgUrl: '/img/Microprocesadores/AMD Ryzen 7 5800x.jpg',
  //       categoryId: 5,
  //       price: 90000,
  //     },
  //     {
  //       name: 'AMD Ryzen 7 3700x',
  //       imgUrl: '/img/Microprocesadores/AMD Ryzen 7 3700x.jpg',
  //       categoryId: 5,
  //       price: 70000,
  //     },
  //     {
  //       name: 'Sentey x10 RGB Glass',
  //       imgUrl: '/img/Gabinetes/Sentey x10 RGB Glass.jpg',
  //       categoryId: 6,
  //       price: 25000,
  //     },
  //     {
  //       name: 'Phanteks evolv X',
  //       imgUrl: '/img/Gabinetes/Phanteks evolv X.jpg',
  //       categoryId: 6,
  //       price: 20000,
  //     },
  //     {
  //       name: 'Phanteks eclipse p400',
  //       imgUrl: '/img/Gabinetes/Phanteks eclipse p400.jpg',
  //       categoryId: 6,
  //       price: 23000,
  //     },
  //     {
  //       name: 'DS Line 1',
  //       imgUrl: '/img/Gabinetes/DS Line 1.jpg',
  //       categoryId: 6,
  //       price: 12500,
  //     },
  //     {
  //       name: 'Cassiopeia Level up',
  //       imgUrl: '/img/Gabinetes/Cassiopeia Level up.jpg',
  //       categoryId: 6,
  //       price: 10000,
  //     },
  //     {
  //       name: 'Corsair Tx 850w',
  //       imgUrl: '/img/Fuentes/Corsair Tx 850w.jpg',
  //       categoryId: 7,
  //       price: 50000,
  //     },
  //     {
  //       name: 'EVGA 850w gq 80 plus',
  //       imgUrl: '/img/Fuentes/EVGA 850w gq 80 plus.jpg',
  //       categoryId: 7,
  //       price: 45000,
  //     },
  //     {
  //       name: 'ASUS TUF gaming 750w',
  //       imgUrl: '/img/Fuentes/ASUS TUF gaming 750w.jpg',
  //       categoryId: 7,
  //       price: 55000,
  //     },
  //     {
  //       name: 'Thermaltake 600w',
  //       imgUrl: '/img/Fuentes/Thermaltake 600w.jpg',
  //       categoryId: 7,
  //       price: 35000,
  //     },
  //     {
  //       name: 'TDeepcool da500w',
  //       imgUrl: '/img/Fuentes/Deepcool da500w.jpg',
  //       categoryId: 7,
  //       price: 25000,
  //     },
  //   ],
  // });
  process.exit(0);
}
seed();

export default seed;
