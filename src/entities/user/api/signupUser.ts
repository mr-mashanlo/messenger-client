import { defaultInstance } from '@/shared/api';

async function signupUser( email: string, password: string, confirm: string ) {
  const response = await defaultInstance( 'auth/signup', { method: 'post', body: JSON.stringify( { email, password, confirm } ) } );
  return await response.json();
};

export default signupUser;