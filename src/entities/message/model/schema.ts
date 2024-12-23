import { z } from 'zod';

export const MessageSchema = z.object( {
  text: z.string().min( 1 )
} );

export const MessageResponseSchema = MessageSchema.extend( {
  _id: z.string(),
  sender: z.string(),
  reciever: z.string(),
  created: z.string(),
  readed: z.boolean(),
  media: z.string(),
  reaction: z.string()
} );

export type MessageType = z.infer<typeof MessageSchema>;

export type MessageResponseType = z.infer<typeof MessageResponseSchema>;