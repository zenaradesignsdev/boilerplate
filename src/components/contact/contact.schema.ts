import { z } from 'zod'

/**
 * The `website` field is a honeypot — it is hidden from real users via CSS.
 * Bots that fill every visible field will populate it; the API rejects those submissions.
 * It must be present in the schema so it passes through the form payload to the route.
 */
export const contactSchema = z.object({
  website: z.string().max(0, 'Bot detected').optional(),
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be under 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^\+?[\d][\d\s\-().]{5,18}[\d]$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be under 2000 characters'),
})

export type ContactFormValues = z.infer<typeof contactSchema>
