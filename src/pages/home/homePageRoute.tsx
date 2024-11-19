import { RouteObject } from 'react-router-dom';

export const homePageRoute: RouteObject = {
  path: '/',
  lazy: async () => {
    const { HomePage } = await import( './homePage' );
    return { Component: HomePage };
  }
};