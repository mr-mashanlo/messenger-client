import { UserResponseType } from '@/entities/user';

import useChatStore from './store';

export function getQuery() {
  return useChatStore.getState().query;
}

export function setQuery( query: string ) {
  return useChatStore.getState().setQuery( query );
}

export function getReciever() {
  return useChatStore.getState().reciever;
}

export function setReciever( reciever: UserResponseType ) {
  return useChatStore.getState().setReciever( reciever );
}