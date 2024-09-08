import { userService } from '@/shared/services';

const fetchUsers = async () => {
  try {
    const users = await userService.getAll();
    return { success: true, data: users };
  } catch ( error ) {
    return { success: false, error: error };
  }
};

export default fetchUsers;