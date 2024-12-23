import { z } from 'zod';

export const ChatResponseSchema = z.object( {
  _id: z.string(),
  users: z.array( z.string() )
} );

export type ChatResponseType = z.infer<typeof ChatResponseSchema>;