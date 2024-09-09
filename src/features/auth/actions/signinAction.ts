import { ActionFunctionArgs } from 'react-router-dom';
import { useAuthStore } from '@/features/auth/store';
import { authService } from '@/features/auth/service';

const signinAction = async ( { request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const email = formData.get( 'email' ) as string;
  const password = formData.get( 'password' ) as string;

  try {
    const user = await authService.signin( email, password );
    useAuthStore.getState().setID( user.id );
    return { user };
  } catch ( error ) {
    return { error };
  }
};

export default signinAction;