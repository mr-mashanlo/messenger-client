import { LoaderFunctionArgs, redirect, RouteObject } from 'react-router-dom';

import { useAuthStore } from '@/entities/auth/model';

export const homePageRoute: RouteObject = {
  path: '/',
  lazy: async () => {
    const { HomePage } = await import( './homePage' );
    return { Component: HomePage };
  },
  loader: ( args: LoaderFunctionArgs ) => {
    return useAuthStore.getState().sub ? args : redirect( '/signin' ) ;
  }
};