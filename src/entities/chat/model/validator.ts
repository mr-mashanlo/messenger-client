import { ChatsResponseSchema } from '../types/chatSchema';

export function validateChatsResponse( data: unknown ) {
  return ChatsResponseSchema.parse( data );
}