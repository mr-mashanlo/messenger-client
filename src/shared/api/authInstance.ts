import defaultInstance from './defaultInstance';

const authInstance = defaultInstance.extend( {
  hooks: {
    afterResponse: [
      async ( _request, _options, response ) => {
        if ( !response.ok ) {
          const responseData = await response.json() as { code: number, errors: Array<{ path: string, msg: string }>};
          const isTokenExpired = responseData.errors.findIndex( error => error.path === 'expired' );
          if ( isTokenExpired >= 0 ) {
            await defaultInstance( 'auth/token', { method: 'get' } );
            return response;
          }
        }
        return response;
      }
    ]
  }
} );

export default authInstance;