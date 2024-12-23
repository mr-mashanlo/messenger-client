import { MessageResponseSchema, MessageSchema } from './schema';

export function validateMessageFormData( formData: FormData ) {
  const fields = Object.fromEntries( formData.entries() );
  const result = MessageSchema.safeParse( fields );
  if ( !result.success ) {
    throw result.error;
  }
  return result.data;
};

export function validateMessageResponse( formData: FormData ) {
  const fields = Object.fromEntries( formData.entries() );
  const result = MessageResponseSchema.safeParse( fields );
  if ( !result.success ) {
    throw result.error;
  }
  return result.data;
};