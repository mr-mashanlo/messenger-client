import { ActionFunctionArgs } from 'react-router-dom';
import { useAuthStore } from '@/features/auth/store';
import { authService } from '@/shared/services';

const signupAction = async ( { request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const email = formData.get( 'email' ) as string;
  const password = formData.get( 'password' ) as string;
  const confirm = formData.get( 'confirm' ) as string;

  try {
    await authService.signup( email, password, confirm );
    useAuthStore.getState().setIsAuth( true );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default signupAction;