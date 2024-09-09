import { ActionFunctionArgs } from 'react-router-dom';
import { useAuthStore } from '@/features/auth/store';
import { authService } from '@/features/auth/service';

const signupAction = async ( { request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const email = formData.get( 'email' ) as string;
  const password = formData.get( 'password' ) as string;
  const confirm = formData.get( 'confirm' ) as string;

  try {
    const user = await authService.signup( email, password, confirm );
    useAuthStore.getState().setID( user.id );
    return { user };
  } catch ( error ) {
    return { error };
  }
};

export default signupAction;