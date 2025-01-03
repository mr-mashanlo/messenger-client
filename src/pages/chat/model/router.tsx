import { LoaderFunctionArgs, redirect, RouteObject } from 'react-router-dom';

import { getUserID } from '@/entities/user';

export const chatRoute: RouteObject = {
  path: 'chat',
  lazy: async () => {
    const { ChatPage } = await import( '../ui/page' );
    return { Component: ChatPage };
  },
  loader: ( args: LoaderFunctionArgs ) => {
    return getUserID() ? args : redirect( '/signin' ) ;
  }
};