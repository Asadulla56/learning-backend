import { Types } from 'mongoose';

export interface IPaymentModule {
  createPayment: {
    amount: number;           // amount in smallest currency unit
    courseId: Types.ObjectId | string;  // reference to Course
  };
  paymentRecord: {
    courseId: Types.ObjectId | string;  // reference to Course
    userId: Types.ObjectId | string;    // reference to User
    amount: number;
    currency: string;
    status: 'pending' | 'succeeded' | 'failed';
    paymentIntentId: string;
  };
  confirmPayment: {
    paymentIntentId: string;
  };
}
