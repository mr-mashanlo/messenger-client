import ky from 'ky';

// @ts-expect-error env
const url = import.meta.env.VITE_REACT_APP_BACK_URL;

const defaultInstance = ky.create( {
  retry: 1,
  prefixUrl: url,
  credentials: 'include',
  hooks: {
    beforeError: [
      async ( error ) => {
        const response = await error.response.json();
        return Promise.reject( response );
      }
    ],
    afterResponse: [
      async ( _request, _options, response ) => {
        return response;
      }
    ]
  }
} );

export default defaultInstance;