import { userService } from '@/features/user/services';

const fetchUsers = async () => {
  try {
    const users = await userService.getAll();
    return { users };
  } catch ( error ) {
    return { error };
  }
};

export default fetchUsers;