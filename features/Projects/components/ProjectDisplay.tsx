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
        'flex h-fit w-full flex-col items-start justify-center gap-6 rounded-2xl bg-main-200 p-4 text-black lg:flex-row lg:p-6 lg:odd:flex-row-reverse xl:max-w-screen-lg 2xl:max-w-screen-xl',
        className
      )}
    >
      <div className="group relative flex w-full items-center justify-center overflow-hidden rounded-lg lg:w-1/2">
        <Image
          src={project.image}
          alt={project.name}
          width={800}
          height={800}
          className="h-fit w-full rounded-lg transition-all duration-200 ease-in-out"
        />
        {(project.link.github || project.link.live) && (
          <div className="absolute -bottom-6 hidden h-fit w-full flex-col items-center justify-center gap-4 rounded-lg px-4 py-2 transition-all duration-500 ease-in-out group-hover:bottom-0 lg:flex lg:flex-row">
            {project.link.github && (
              <ProjectLinks
                className="w-1/2 bg-white/40 opacity-0 backdrop-blur-sm transition-all duration-500 ease-in-out group-hover:opacity-100"
                link={project.link.github}
                icon={<Github />}
                label="Github"
              />
            )}
            {project.link.live && (
              <ProjectLinks
                className="w-1/2 bg-white/40 opacity-0 backdrop-blur-sm transition-all duration-500 ease-in-out group-hover:opacity-100"
                link={project.link.live}
                icon={<Vercel size={20} />}
                label="See Live"
              />
            )}
          </div>
        )}
      </div>
      <div className="flex h-fit w-full flex-col gap-4 lg:w-1/2">
        <h1 className="text-3xl font-bold">{project.name}</h1>
        <p className="min-h-[5lh] text-[1rem] leading-loose">{project.description}</p>
        <p className="flex w-full flex-wrap gap-1 font-semibold">
          Tech:{' '}
          {project.techStack.map((tech, i) => (
            <span className="font-normal" key={i}>
              {tech}
              {i < project.techStack.length - 1 && <span className="">,</span>}
            </span>
          ))}
        </p>
      </div>
      <div className="flex w-full flex-col gap-2 lg:hidden">
        {project.link.github && (
          <ProjectLinks
            className="w-full rounded-full border bg-main-400 px-4 py-2 transition-all duration-500 ease-in-out"
            link={project.link.github}
            icon={<Github />}
            label="Github"
          />
        )}
        {project.link.live && (
          <ProjectLinks
            className="w-full rounded-full border bg-main-400 px-4 py-2 transition-all duration-500 ease-in-out"
            link={project.link.live}
            icon={<Vercel size={20} />}
            label="See Live"
          />
        )}
      </div>
    </div>
  );
}
