import ProjectDisplay from './ProjectDisplay';
import { Projects as ProjectData } from '@/data/Projects';

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex h-fit w-full flex-col items-center justify-around gap-10 bg-main-800 p-6 lg:p-24"
    >
      <h1 className="text-5xl font-bold">Projects</h1>
      {ProjectData.map((project, i) => (
        <ProjectDisplay key={i} project={project} />
      ))}
    </section>
  );
}
