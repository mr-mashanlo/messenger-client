import { RouteObject } from 'react-router-dom';

export const signInPageRoute: RouteObject = {
  path: 'signin',
  lazy: async () => {
    const { SignInPage } = await import( './signinPage' );
    return { Component: SignInPage };
  }
};

export const signUpPageRoute: RouteObject = {
  path: 'signup',
  lazy: async () => {
    const { SignUpPage } = await import( './signupPage' );
    return { Component: SignUpPage };
  }
};