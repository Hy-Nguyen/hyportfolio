import WatchDogs from '@/public/imgs/WatchdogsMockup.png';
import DailyDraft from '@/public/imgs/DailyDraftMockUp.png';
import AutoConcepts from '@/public/imgs/360AutoConcepts.png';

export const Projects = [
  {
    name: 'WatchDogs',
    description:
      'WatchDogs is Web3 crypto portfolio tracker. It allows users to track their crypto portfolio and get real-time updates on the market. What sets it apart is its ability to track multiple wallets and blockchains. This project really challenged my ability to work with live data and enhanced my abilty to create animations to engage users.',
    image: WatchDogs,
    link: {
      live: 'https://watchdogs-chi.vercel.app/',
    },
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    name: 'Daily Draft',
    description:
      'Daily Draft is a web 3 daily fantasy sports platform. Built on Solana, Daily Draft invites users to create and manage their own fantasy sports leagues and compete against friends and family. This project really challenged my ability to work with live data and enhanced my abilty to create animations to engage users.',
    image: DailyDraft,
    link: {
      github: 'https://github.com/Hy-Nguyen/daily-draft',
      live: 'https://dailydraft.vercel.app/',
    },
    techStack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Solana-Web3.js', 'Framer Motion'],
  },
  {
    name: '360 Auto Concepts',
    description:
      'A client website for a local small business that specializes in auto details, specializing in ceramic coatings and paint protection films. This project was a great learning experience in working with a client and understanding their needs. ',
    image: AutoConcepts,
    link: {
      github: 'https://github.com/Hy-Nguyen/360wraps',
      live: 'https://www.360autoconcepts.com/',
    },
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Resend'],
  },
];
