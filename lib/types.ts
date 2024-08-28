import { StaticImageData } from 'next/image';
export type Project = {
  name: string;
  techStack: string[];
  description: string;
  image: StaticImageData | string;
  link: {
    github: string;
    live: string;
  };
};

export type SVGIcon = { size?: number; className?: string };
