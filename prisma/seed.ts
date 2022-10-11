import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export async function seed() {
  // await prisma.states.createMany({
  //   data: [
  //     { state: 'active' },
  //     { state: 'pending' },
  //     { state: 'cancelled' },
  //     { state: 'disabled' },
  //     { state: 'approved' },
  //     { state: 'rejected' },
  //   ],
  // });
  await prisma.role.createMany({
    data: [{ role: 'admin' }, { role: 'user' }],
  });
  await prisma.category.createMany({
    data: [
      { category: 'Destacados' },
      { category: 'Tarjetas de video' },
      { category: 'Memorias' },
      { category: 'Motherboards' },
      { category: 'Procesadores' },
      { category: 'Gabinetes' },
      { category: 'Fuentes' },
    ],
  });
  await prisma.products.createMany({
    data: [
      {
        name: 'RTX 3090',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515363/Products/img/Tarjetas%20de%20video/rtx_3090_cwbdvb.jpg',
        categoryId: 1,
        price: 300000,
      },
      {
        name: 'RTX 3080ti',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515363/Products/img/Tarjetas%20de%20video/rtx_3080ti_vtzxrg.jpg',
        categoryId: 1,
        price: 250000,
      },
      {
        name: 'ASUS crosshair dark hero VIII',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515362/Products/img/Mothers/ASUS_crosshair_dark_hero_VIII_zqgbt0.jpg',
        categoryId: 1,
        price: 120000,
      },
      {
        name: 'Gskill trident z royal',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515363/Products/img/RAMs/Gskill_trident_z_royal_kbdndb.jpg',
        categoryId: 1,
        price: 85000,
      },
      {
        name: 'Hyperx Fury 8gb',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515363/Products/img/RAMs/Hyperx_Fury_8gb_cpho33.jpg',
        categoryId: 1,
        price: 60000,
      },
      {
        name: 'RTX 3090',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515363/Products/img/Tarjetas%20de%20video/rtx_3090_cwbdvb.jpg',
        categoryId: 2,
        price: 300000,
      },
      {
        name: 'RTX 3080ti',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515363/Products/img/Tarjetas%20de%20video/rtx_3080ti_vtzxrg.jpg',
        categoryId: 2,
        price: 250000,
      },
      {
        name: 'RTX 3080',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515363/Products/img/Tarjetas%20de%20video/rtx_3080_xwrv8b.jpg',
        categoryId: 2,
        price: 200000,
      },
      {
        name: 'rx 6700 xt',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515363/Products/img/Tarjetas%20de%20video/rx_6700_xt_uvx747.jpg',
        categoryId: 2,
        price: 175000,
      },
      {
        name: 'rx6900 xt',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515364/Products/img/Tarjetas%20de%20video/rx6900_xt_wchahq.jpg',
        categoryId: 2,
        price: 200000,
      },
      {
        name: 'Corsair Vengeance lfx',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515363/Products/img/RAMs/Corsair_Vengeance_lfx_dmhdqh.jpg',
        categoryId: 3,
        price: 50000,
      },
      {
        name: 'Gskill trident z RGB',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515363/Products/img/RAMs/Gskill_trident_z_RGB_dtnycb.jpg',
        categoryId: 3,
        price: 75000,
      },
      {
        name: 'Gskill trident z royal',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515363/Products/img/RAMs/Gskill_trident_z_royal_kbdndb.jpg',
        categoryId: 3,
        price: 85000,
      },
      {
        name: 'Hyperx Fury 8gb',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515363/Products/img/RAMs/Hyperx_Fury_8gb_cpho33.jpg',
        categoryId: 3,
        price: 60000,
      },
      {
        name: 'Patriot viper Rgb',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515363/Products/img/RAMs/Patriot_viper_Rgb_m5klxi.jpg',
        categoryId: 3,
        price: 65000,
      },
      {
        name: 'ASUS crosshair dark hero VIII',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515362/Products/img/Mothers/ASUS_crosshair_dark_hero_VIII_zqgbt0.jpg',
        categoryId: 4,
        price: 120000,
      },
      {
        name: 'ASUS TUF gaming b450',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515362/Products/img/Mothers/ASUS_TUF_gaming_b450_pangzq.jpg',
        categoryId: 4,
        price: 90000,
      },
      {
        name: 'Gigabyte Aorus z690 elite',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515362/Products/img/Mothers/Gigabyte_Aorus_z690_elite_u58wfr.jpg',
        categoryId: 4,
        price: 98000,
      },
      {
        name: 'Gigabyte b660m gaming x',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515362/Products/img/Mothers/Gigabyte_b660m_gaming_x_ez92zp.jpg',
        categoryId: 4,
        price: 70000,
      },
      {
        name: 'MSI x570 ',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515362/Products/img/Mothers/MSI_x570_r8hlly.jpg',
        categoryId: 4,
        price: 50000,
      },
      {
        name: 'Intel i9 11900k',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515362/Products/img/Microprocesadores/Intel_i9_11900k_eik7st.jpg',
        categoryId: 5,
        price: 120000,
      },
      {
        name: 'Intel i9 11700',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515362/Products/img/Microprocesadores/Intel_i9_11700_peuop3.jpg',
        categoryId: 5,
        price: 100000,
      },
      {
        name: 'AMD Ryzen 9 5950x',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515361/Products/img/Microprocesadores/AMD_Ryzen_9_5950x_skdcdh.jpg',
        categoryId: 5,
        price: 100000,
      },
      {
        name: 'AMD Ryzen 7 5800x',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515361/Products/img/Microprocesadores/AMD_Ryzen_7_5800x_ebbr1n.jpg',
        categoryId: 5,
        price: 90000,
      },
      {
        name: 'AMD Ryzen 7 3700x',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515361/Products/img/Microprocesadores/AMD_Ryzen_7_3700x_thhh0o.jpg',
        categoryId: 5,
        price: 70000,
      },
      {
        name: 'Sentey x10 RGB Glass',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515361/Products/img/Gabinetes/Sentey_x10_RGB_Glass_zu6sgn.jpg',
        categoryId: 6,
        price: 25000,
      },
      {
        name: 'Phanteks evolv X',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515361/Products/img/Gabinetes/Phanteks_evolv_X_rq6oh5.jpg',
        categoryId: 6,
        price: 20000,
      },
      {
        name: 'Phanteks eclipse p400',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515361/Products/img/Gabinetes/Phanteks_eclipse_p400_ozzumd.jpg',
        categoryId: 6,
        price: 23000,
      },
      {
        name: 'DS Line 1',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515361/Products/img/Gabinetes/DS_Line_1_csvvuc.jpg',
        categoryId: 6,
        price: 12500,
      },
      {
        name: 'Cassiopeia Level up',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515361/Products/img/Gabinetes/Cassiopeia_Level_up_mbj2rq.jpg',
        categoryId: 6,
        price: 10000,
      },
      {
        name: 'Corsair Tx 850w',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515360/Products/img/Fuentes/Corsair_Tx_850w_fz3xp3.jpg',
        categoryId: 7,
        price: 50000,
      },
      {
        name: 'EVGA 850w gq 80 plus',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515361/Products/img/Fuentes/EVGA_850w_gq_80_plus_mwpqua.jpg',
        categoryId: 7,
        price: 45000,
      },
      {
        name: 'ASUS TUF gaming 750w',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515360/Products/img/Fuentes/ASUS_TUF_gaming_750w_ia9gof.jpg',
        categoryId: 7,
        price: 55000,
      },
      {
        name: 'Thermaltake 600w',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515361/Products/img/Fuentes/Thermaltake_600w_jlo7nl.jpg',
        categoryId: 7,
        price: 35000,
      },
      {
        name: 'TDeepcool da500w',
        imgUrl:
          'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665515360/Products/img/Fuentes/Deepcool_da500w_cus5mq.jpg',
        categoryId: 7,
        price: 25000,
      },
    ],
  });
  process.exit(0);
}
seed();

export default seed;
