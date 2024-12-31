import { z } from 'zod';

export const UserResponseSchema = z.object( {
  _id: z.string(),
  email: z.string().email(),
  fullname: z.string(),
  chat: z.string().optional()
} );

export const UsersResponseSchema = z.array( UserResponseSchema );

export type UserResponseType = z.infer<typeof UserResponseSchema>;

export type UsersResponseType = z.infer<typeof UsersResponseSchema>;