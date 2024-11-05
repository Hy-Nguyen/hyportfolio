import Form from './Form';
import Image from 'next/image';
import ContactIcon from '@/public/imgs/ContactFormImage.jpg';
export default function ContactForm() {
  return (
    <div className="container flex h-fit w-full flex-col items-center justify-around gap-10 p-24 text-zinc-800">
      <h1 className="text-5xl font-bold">Contact Me</h1>
      <p className="w-1/2 text-center text-xl font-medium">
        I&apos;m always looking for new opportunities to work on exciting projects. If you have a project in mind or
        just want to say hi, feel free to contact me.
      </p>
      <div className="flex w-full flex-row gap-6 rounded-lg p-4 bg-main-200">
        <Image src={ContactIcon} alt="Photo by Filip Zrnzević" className="aspect-square rounded-md w-1/2 object-cover" />
        <Form />
      </div>
    </div>
  );
}
