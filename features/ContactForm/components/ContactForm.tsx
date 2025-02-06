import Form from './Form';
import Image from 'next/image';
import ContactIcon from '@/public/imgs/ContactFormImage.jpg';
export default function ContactForm() {
  return (
    <section
      id="contact"
      className="container flex h-fit w-full flex-col items-center justify-around gap-10 p-6 text-zinc-800 lg:p-24"
    >
      <h1 className="text-5xl font-bold">Contact Me</h1>
      <p className="w-full text-center text-xl font-medium lg:w-1/2">
        I&apos;m always looking for new opportunities to work on exciting projects. If you have a project in mind or
        just want to say hi, feel free to contact me.
      </p>
      <div className="flex w-full flex-col items-center justify-center gap-6 rounded-lg bg-main-200 p-4 lg:flex-row">
        <Image
          src={ContactIcon}
          alt="Photo by Filip Zrnzević"
          className="aspect-square w-full rounded-md object-cover lg:w-1/2"
        />
        <Form />
      </div>
    </section>
  );
}
