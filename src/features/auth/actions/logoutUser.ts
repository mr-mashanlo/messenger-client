import { useAuthStore } from '@/features/auth/store';
import { authService } from '@/features/auth/service';

const logoutUser = async () => {
  try {
    await authService.logout();
    useAuthStore.getState().setID( '' );
    return { success: true };
  } catch ( error ) {
    return { error };
  }
};

export default logoutUser;