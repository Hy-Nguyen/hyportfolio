'use server';

import { contactFormSchema } from '../schema';

export async function sendContactForm(
  prevState: {
    message: string;
    success: boolean | null;
    errors: { name: string | null; email: string | null; message: string | null };
  },
  formData: FormData
) {
  let data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  const BASE_URL = process.env.BASE_URL;

  try {
    await fetch(`${BASE_URL}/api/send`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
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
