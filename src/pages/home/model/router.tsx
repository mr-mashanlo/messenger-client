import { LoaderFunctionArgs, redirect, RouteObject } from 'react-router-dom';

import { getUserID } from '@/entities/user';

export const homeRoute: RouteObject = {
  path: '/',
  lazy: async () => {
    const { HomePage } = await import( '../ui/page' );
    return { Component: HomePage };
  },
  loader: ( args: LoaderFunctionArgs ) => {
    return getUserID() ? args : redirect( '/signin' ) ;
  }
};