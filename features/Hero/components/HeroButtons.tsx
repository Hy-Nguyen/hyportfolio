export default function HeroButtons() {
  return (
    <div className="flex w-full flex-col gap-4 lg:flex-row lg:gap-6">
      <ContactButton href="https://www.linkedin.com/in/hygnguyen/">Connect with me on LinkedIn</ContactButton>
      <ContactButton href="mailto:giahy316@gmail.com">Contact me via email</ContactButton>
    </div>
  );
}

function ContactButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      className="h-fit w-full rounded-xl bg-main-500 px-10 py-2 text-center text-lg text-white transition-all duration-500 ease-in-out hover:scale-105 hover:bg-main-400 lg:w-1/2 lg:text-base"
    >
      {children}
    </a>
  );
}
