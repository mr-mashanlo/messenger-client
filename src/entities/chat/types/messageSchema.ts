import { z } from 'zod';

export const MessageResponseSchema = z.object( {
  _id: z.string(),
  sender: z.string(),
  reciever: z.string(),
  chat: z.string(),
  text: z.string(),
  media: z.string(),
  reaction: z.string(),
  created: z.string(),
  opened: z.boolean()
} );

export type MessageResponseType = z.infer<typeof MessageResponseSchema>;