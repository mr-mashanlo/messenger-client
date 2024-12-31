import useUserStore from './store';

export function getUserID() {
  return useUserStore.getState().id;
}

export function setUserID( id: string | null ) {
  return useUserStore.getState().setID( id );
}