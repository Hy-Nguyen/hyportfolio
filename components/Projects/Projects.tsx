import ProjectDisplay from './ProjectDisplay';

// name: 'Sample Project',
//     description: 'This is a sample project',
//     image: '/images/sample.png',
//     link: 'https://www.google.com',
//     techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],

export default function Projects() {
  const SampleProject = {
    name: 'WatchDogs',
    description:
      'WatchDogs is Web3 crypto portfolio tracker. It allows users to track their crypto portfolio and get real-time updates on the market. What sets it apart is its ability to track multiple wallets and blockchains. This project really challenged my ability to work with live data and enhanced my abilty to create animations to engage users.',
    image:
      'https://cdn.dribbble.com/userupload/13780629/file/original-fc30503129ff4efec387c9d29c1332f3.jpg?resize=1504x1128',
    link: {
      github: 'https://www.google.com',
      live: 'https://www.google.com',
    },
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  };
  return (
    <div className="flex h-fit w-full flex-col items-center justify-around gap-10 bg-main-800 p-24">
      <h1 className="text-5xl font-bold">Projects</h1>
      <ProjectDisplay project={SampleProject} />
      <ProjectDisplay project={SampleProject} />
      <ProjectDisplay project={SampleProject} />
      <ProjectDisplay project={SampleProject} />
    </div>
  );
}
