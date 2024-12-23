import { LoaderFunctionArgs, redirect, RouteObject } from 'react-router-dom';

import { useAuthStore } from '@/entities/auth/model';

export const chatRoute: RouteObject = {
  path: 'chat',
  lazy: async () => {
    const { ChatPage } = await import( './chatPage' );
    return { Component: ChatPage };
  },
  loader: ( args: LoaderFunctionArgs ) => {
    return useAuthStore.getState().sub ? redirect( '/' ) : args;
  }
};