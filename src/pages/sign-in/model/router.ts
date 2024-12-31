import { LoaderFunctionArgs, redirect, RouteObject } from 'react-router-dom';

import { getUserID } from '@/entities/user';

export const signinRoute: RouteObject = {
  path: 'signin',
  lazy: async () => {
    const { SigninPage } = await import( '../ui/page' );
    return { Component: SigninPage };
  },
  loader: ( args: LoaderFunctionArgs ) => {
    return getUserID() ? redirect( '/' ) : args;
  }
};