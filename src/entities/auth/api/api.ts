import { authInstance, defaultInstance } from '@/shared/api';

export async function signIn( email: string, password: string ) {
  const response = await defaultInstance( 'auth/signin', { method: 'post', body: JSON.stringify( { email, password } ), headers: { 'content-type': 'application/json' } } );
  return await response.json();
};

export async function signUp( email: string, password: string, confirm: string ) {
  const response = await defaultInstance( 'auth/signup', { method: 'post', body: JSON.stringify( { email, password, confirm } ), headers: { 'content-type': 'application/json' } } );
  return await response.json();
};

export async function signOut() {
  const response = await authInstance( 'auth/logout', { method: 'get', headers: { 'content-type': 'application/json' } } );
  return await response.json();
};

export async function remove() {
  const response = await authInstance( 'auth/delete', { method: 'delete', headers: { 'content-type': 'application/json' } } );
  return await response.json();
};

export async function refresh() {
  const response = await authInstance( 'auth/refresh', { method: 'get', headers: { 'content-type': 'application/json' } } );
  return await response.json();
};