'use client';

import { useEffect, useRef, useState } from 'react';
import { useFormState } from 'react-dom';
import { sendContactForm } from '../hooks/sendForm';
import Input from './Input';
import SubmitButton from './SubmitButton';
import toast from 'react-hot-toast';
import { contactFormSchema } from '../schema';
import TextArea from './TextArea';

const initialState = {
  message: '',
  success: null as boolean | null,
  errors: {
    name: null as string | null,
    email: null as string | null,
    message: null as string | null,
  },
};

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(sendContactForm, initialState);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [error, setError] = useState<{
    firstName: string[] | undefined;
    lastName: string[] | undefined;
    email: string[] | undefined;
    message: string[] | undefined;
  }>({
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    message: undefined,
  });

  function validateInputs(formData: FormData) {
    let data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    const parsedData = contactFormSchema.safeParse(data);
    if (!parsedData.success) {
      setError({
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        message: undefined,
        ...parsedData.error.flatten().fieldErrors,
      });
      return false;
    }

    return true;
  }
  async function handleSubmit(formData: FormData) {
    setHasSubmitted(true);

    if (validateInputs(formData)) {
      setError({
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        message: undefined,
      });
      setHasSubmitted(false);
      await formAction(formData);
    } else {
      return;
    }
  }

  useEffect(() => {
    if (state.success && formRef.current) {
      toast.success(state.message);
      formRef.current.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={handleSubmit} className="flex w-1/2 flex-col gap-4">
      <div className="flex w-full flex-row gap-4">
        <Input type="text" name="firstName" label="First Name" placeholder="John" error={error?.firstName} />
        <Input type="text" name="lastName" label="Last Name" placeholder="Doe" error={error?.lastName} />
      </div>
      <Input type="text" name="email" label="Email" placeholder="john.doe@example.com" error={error?.email} />
      <TextArea type="text" name="message" label="Message" placeholder="Your message here..." error={error?.message} />
      <SubmitButton />
    </form>
  );
}
