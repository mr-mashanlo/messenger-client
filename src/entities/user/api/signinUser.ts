import { defaultInstance } from '@/shared/api';

async function signinUser( email: string, password: string ) {
  const response = await defaultInstance( 'auth/signin', { method: 'post', body: JSON.stringify( { email, password } ) } );
  return await response.json();
};

export default signinUser;