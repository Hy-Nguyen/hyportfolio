import { Project } from '@/lib/types';
import { cn } from '@/lib/utils';
import Github from '@/public/Icons/Logos/Github';
import Vercel from '@/public/Icons/Logos/Vercel';
import Image from 'next/image';
import ProjectLinks from './ProjectLinks';

export default function ProjectDisplay({ project, className }: { project: Project; className?: string }) {
  return (
    <div
      className={cn(
        'flex h-fit w-full items-start justify-center gap-6 rounded-2xl bg-main-200 px-6 py-6 text-black odd:flex-row-reverse xl:max-w-screen-lg 2xl:max-w-screen-xl',
        className
      )}
    >
      <div className="group relative flex w-1/2 items-center justify-center overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.name}
          width={800}
          height={800}
          className="h-fit w-full rounded-lg transition-all duration-200 ease-in-out group-hover:scale-105"
        />
        <div className="absolute flex h-full w-full flex-col items-center justify-center gap-10 rounded-lg transition-all duration-500 ease-in-out group-hover:backdrop-blur-md">
          <ProjectLinks
            className="opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
            link={project.link.github}
            icon={<Github />}
            label="Github"
          />
          <ProjectLinks
            className="opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
            link={project.link.live}
            icon={<Vercel size={20} />}
            label="See Live"
          />
        </div>
      </div>
      <div className="flex h-fit w-1/2 flex-col gap-4">
        <h1 className="text-3xl font-bold">{project.name}</h1>
        <p className="min-h-[5lh] text-[1rem] leading-loose">{project.description}</p>
      </div>
    </div>
  );
}
