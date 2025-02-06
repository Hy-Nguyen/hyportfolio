import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z.string().min(1, 'Please enter your first name.'),
  lastName: z.string().min(1, 'Please enter your last name.'),
  email: z.string().email('Please enter a valid email.'),
  message: z.string().min(1, 'Please enter a message.'),
});
