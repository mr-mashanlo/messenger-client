import ky from 'ky';

const defaultInstance = ky.create( {
  retry: 1,
  prefixUrl: import.meta.env.VITE_REACT_APP_BACK_URL,
  credentials: 'include'
} );

export default defaultInstance;