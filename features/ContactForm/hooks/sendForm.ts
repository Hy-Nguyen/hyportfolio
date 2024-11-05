'use server';

import { contactFormSchema } from '../schema';

export async function sendContactForm(
  prevState: {
    message: string;
    success: boolean | null;
    errors?: { name: string[] | null; email: string[] | null; message: string[] | null };
  },
  formData: FormData
) {
  let data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  const parsedData = contactFormSchema.safeParse(data);

  if (!parsedData.success) {
    return { ...prevState, errors: parsedData.error.flatten().fieldErrors, success: false };
  }

  try {
    console.log(data);
  } catch (error) {
    console.log(error);
    return { ...prevState, message: 'Something went wrong', success: false };
  }

  return {
    ...prevState,
    errors: { name: null, email: null, message: null },
    message: 'Form submitted successfully',
    success: true,
  };
}
