import { z } from 'zod';

export const createPaymentSchema = z.object({
  amount: z.number().positive(),
  courseId: z.string().min(1),
});

export const confirmPaymentSchema = z.object({
  paymentIntentId: z.string().min(1),
});
