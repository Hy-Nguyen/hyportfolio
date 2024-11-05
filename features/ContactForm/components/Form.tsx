'use client';

import { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import { sendContactForm } from '../hooks/sendForm';
import Input from './Input';
import SubmitButton from './SubmitButton';
import toast from 'react-hot-toast';

const initialState = {
  message: '',
  success: null as boolean | null,
  errors: {
    name: undefined as string[]  | undefined,
    email: undefined as string[] | null | undefined,
    message: undefined as string[] | null | undefined,
  },
};

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(sendContactForm, initialState);

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="flex w-1/2 flex-col gap-4">
      <Input type="text" name="name" label="Name" error={state?.errors?.name} />
      <Input type="email" name="email" label="Email" error={state?.errors?.email} />
      <Input type="text" name="message" label="Message" error={state?.errors?.message} />
      <SubmitButton />
    </form>
  );
}
