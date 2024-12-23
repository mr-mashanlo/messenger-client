import defaultInstance from './defaultInstance';

interface ExtendedError extends Error {
  response?: Response;
}

const authInstance = defaultInstance.extend( {
  retry: {
    limit: 1,
    statusCodes: [ 419 ]
  },
  hooks: {
    beforeRetry: [
      async ( { error }: { error: ExtendedError } ) => {
        if ( error.response?.status === 419 ) {
          await defaultInstance( 'auth/token' );
        }
      }
    ]
  }
} );

export default authInstance;