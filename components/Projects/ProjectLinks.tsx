'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function ProjectLinks({
  link,
  icon,
  label,
  className,
}: {
  link: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={link}
      target="_blank"
      className={cn(
        'group/link relative flex w-1/4 min-w-fit items-center justify-center gap-4 rounded-full bg-main-200 p-2 hover:scale-105 hover:bg-main-100',
        className
      )}
    >
      {icon}
      <h1 className="relative">
        {label}
        <div className="absolute -bottom-0 left-0 h-[1.5px] w-0 bg-black transition-all duration-300 group-hover/link:w-full" />
        <div className="absolute -bottom-0 right-0 h-[1.5px] w-0 origin-right rotate-45 bg-black transition-all delay-300 duration-300 group-hover/link:w-1" />
        <div className="absolute -bottom-0 right-0 h-[1.5px] w-0 origin-right -rotate-45 bg-black transition-all delay-300 duration-300 group-hover/link:w-1" />
      </h1>
    </Link>
  );
}
