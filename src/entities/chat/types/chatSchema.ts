import { z } from 'zod';

export const ChatResponseSchema = z.object( {
  _id: z.string(),
  users: z.array( z.string() )
} );

export const ChatsResponseSchema = z.array( ChatResponseSchema );

export type ChatResponseType = z.infer<typeof ChatResponseSchema>;

export type ChatsResponseType = z.infer<typeof ChatsResponseSchema>;