import { useAuthStore } from '@/features/auth/store';
import { userService } from '@/features/user/services';

const fetchUsers = async () => {
  try {
    if ( useAuthStore.getState().id ) {
      const users = await userService.getAll();
      return { users };
    } else {
      return { error: new Error( 'Not authorized' ) };
    }
  } catch ( error ) {
    return { error };
  }
};

export default fetchUsers;