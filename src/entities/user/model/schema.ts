import { z } from 'zod';

export const QuerySchema = z.object( {
  query: z.string().min( 3 )
} );

export const UserResponseSchema = z.object( {
  _id: z.string(),
  email: z.string(),
  fullname: z.string()
} );

export type QueryType = z.infer<typeof QuerySchema>;

export type UserResponseType = z.infer<typeof UserResponseSchema>;