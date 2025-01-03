import { LoaderFunctionArgs, redirect, RouteObject } from 'react-router-dom';

import { getUserID } from '@/entities/user';

export const signupRoute: RouteObject = {
  path: 'signup',
  lazy: async () => {
    const { SignupPage } = await import( '../ui/page' );
    return { Component: SignupPage };
  },
  loader: ( args: LoaderFunctionArgs ) => {
    return getUserID() ? redirect( '/' ) : args;
  }
};