import { LoaderFunctionArgs, redirect, RouteObject } from 'react-router-dom';

import { useAuthStore } from '@/entities/auth/model';

export const signInPageRoute: RouteObject = {
  path: 'signin',
  lazy: async () => {
    const { SignInPage } = await import( './signInPage' );
    return { Component: SignInPage };
  },
  loader: ( args: LoaderFunctionArgs ) => {
    return useAuthStore.getState().sub ? redirect( '/' ) : args;
  }
};

export const signUpPageRoute: RouteObject = {
  path: 'signup',
  lazy: async () => {
    const { SignUpPage } = await import( './signUpPage' );
    return { Component: SignUpPage };
  },
  loader: ( args: LoaderFunctionArgs ) => {
    return useAuthStore.getState().sub ? redirect( '/' ) : args;
  }
};