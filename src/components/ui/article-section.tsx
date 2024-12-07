import { HoverEffect } from './card-hover-effect';

export default function ArticlesSection() {
    return (
        <div
          className='mt-20 md:mt-40 max-w-screen-xl px-6 md:px-10 mx-auto'
          id='articles'
        >
          <h1
            className='text-3xl md:text-4xl text-center font-semibold tracking-wide underline underline-offset-8 decoration-secColor'
            data-aos='fade'
          >
            Articles
          </h1>
    
          <div
            className='mt-10 flex flex-col lg:flex-row gap-10 lg:gap-20'
            data-aos='fade-up'
          >
            <HoverEffect items={projects} />
          </div>
        </div>
      );
}

export const projects = [
    {
        title: 'Peran Koperasi Simpan Pinjam dalam Keberhasilan UMKM',
        // description:
        //   'A sleek solution designed to manage and shorten your super long links.',
        link: 'https://kopmafeuii.com/peran-koperasi-simpan-pinjam-dalam-keberhasilan-umkm/',
        // tech: ['NextJs', 'TailwindCSS', 'PostgreSQL', 'API'],
        url: '/images/article/artikel1.png',
    },
    {
        title: 'Metode Pembelajaran Sekolah dan Perguruan tinggi Berbeda',
        // description:
        //   'A sleek solution designed to manage and shorten your super long links.',
        link: 'https://kopmafeuii.com/metode-pembelajaran-sekolah-dan-perguruan-tinggi-berbeda/',
        // tech: ['NextJs', 'TailwindCSS', 'PostgreSQL', 'API'],
        url: '/images/article/artikel2.png',
    },
    {
        title: 'Kenaikan Biaya QRIS 0,3% Menuai Pro dan Kontra',
        // description:
        //   'A sleek solution designed to manage and shorten your super long links.',
        link: 'https://kopmafeuii.com/kenaikan-biaya-qris-03-menuai-pro-dan-kontra/',
        // tech: ['NextJs', 'TailwindCSS', 'PostgreSQL', 'API'],
        url: '/images/article/artikel3.png',
    },
    {
        title: 'Mengapa Konten Bercyanda Viral?!',
        // description:
        //   'A sleek solution designed to manage and shorten your super long links.',
        link: 'https://kopmafeuii.com/mengapa-konten-bercyanda-viral/',
        // tech: ['NextJs', 'TailwindCSS', 'PostgreSQL', 'API'],
        url: '/images/article/artikel4.png',
    },
    {
        title: 'Pantai di Gunung Kidul: Melepas Stress Belajar',
        // description:
        //   'A sleek solution designed to manage and shorten your super long links.',
        link: 'https://kopmafeuii.com/pantai-di-gunung-kidul-melepas-stress-belajar/',
        // tech: ['NextJs', 'TailwindCSS', 'PostgreSQL', 'API'],
        url: '/images/article/artikel5.png',
    },
    {
        title: 'Jogja Menjadi Destinasi Favorit untuk Merayakan Malam Tahun Baru dengan Pesta Kembang Api Gratis!',
        // description:
        //   'A sleek solution designed to manage and shorten your super long links.',
        link: 'https://kopmafeuii.com/jogja-menjadi-destinasi-favorit-untuk-merayakan-malam-tahun-baru-dengan-pesta-kembang-api-gratis/',
        // tech: ['NextJs', 'TailwindCSS', 'PostgreSQL', 'API'],
        url: '/images/article/artikel6.png',
    },
    {
        title: 'Jogja Menjadi Destinasi Favorit untuk Merayakan Malam Tahun Baru dengan Pesta Kembang Api Gratis!',
        // description:
        //   'A sleek solution designed to manage and shorten your super long links.',
        link: 'https://kopmafeuii.com/jogja-menjadi-destinasi-favorit-untuk-merayakan-malam-tahun-baru-dengan-pesta-kembang-api-gratis/',
        // tech: ['NextJs', 'TailwindCSS', 'PostgreSQL', 'API'],
        url: '/images/article/artikel6.png',
    },
    {
        title: 'Kenali Apa Itu Megathrust dan Bagaimana Dampaknya',
        // description:
        //   'A sleek solution designed to manage and shorten your super long links.',
        link: 'https://kopmafeuii.com/kenali-apa-itu-megathrust-dan-bagaimana-dampaknya/',
        // tech: ['NextJs', 'TailwindCSS', 'PostgreSQL', 'API'],
        url: '/images/article/artikel7.png',
    },
]