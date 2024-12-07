import { HoverEffect } from './card-hover-effect';

export default function ProjectsSection() {
  return (
    <div
      className='mt-20 md:mt-40 max-w-screen-xl px-6 md:px-10 mx-auto'
      id='projects'
    >
      <h1
        className='text-3xl md:text-4xl text-center font-semibold tracking-wide underline underline-offset-8 decoration-secColor'
        data-aos='fade'
      >
        Designs
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
    title: 'Poster',
    // description:
    //   'A sleek solution designed to manage and shorten your super long links.',
    link: '',
    // tech: ['NextJs', 'TailwindCSS', 'PostgreSQL', 'API'],
    url: '/images/design/1.png',
  },
  {
    title: 'Poster',
    // description: 'Personal portfolio with a command-line interface.',
    link: '',
    // tech: ['React + Vite', 'TailwindCSS'],
    url: '/images/design/2.png',
  },
  {
    title: 'Poster',
    // description: 'Digital wedding invitation with an RSVP form.',
    link: '',
    // tech: ['NextJs', 'TailwindCSS', 'Framer Motion', 'API'],
    url: '/images/design/3.png',
  },
  {
    title: 'Content Interactive',
    // description:
      // 'A website to view movie or tv show details and watch trailers.',
    link: '',
    // tech: ['NextJs', 'TailwindCSS', 'API'],
    url: '/images/design/design1.jpeg',
  },
  {
    title: 'Content Interactive',
    // description: 'Interactive tools to generate TailwindCSS code.',
    link: '',
    // tech: ['NextJs', 'TailwindCSS'],
    url: '/images/design/design2.jpeg',
  },
  {
    title: 'Content Interactive',
    // description:
    //   'App to enable users to effortlessly record and manage their expenses.',
    link: '',
    // tech: ['Laravel', 'TailwindCSS', 'SQLite'],
    url: '/images/design/design3.jpeg',
  },
];
