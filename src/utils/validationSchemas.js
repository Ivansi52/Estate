import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  phone: z.string()
    .min(10, 'Phone must be at least 10 digits')
    .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Invalid phone number format'),
  email: z.string()
    .email('Invalid email address'),
  service: z.string()
    .min(1, 'Please select a service'),
  description: z.string()
    .min(10, 'Description must be at least 10 characters')
    .max(500, 'Description must be less than 500 characters'),
  privacyPolicy: z.boolean()
    .refine(val => val === true, 'You must agree to the Privacy Policy')
});