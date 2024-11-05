import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Please enter your name. I want to know who I am talking to!'),
  email: z.string().email("Please enter a valid email. I promise I won't spam you!"),
  message: z.string().min(1, 'Please enter a message. I want to help you!'),
});
