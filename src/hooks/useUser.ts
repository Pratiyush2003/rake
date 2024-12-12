import { RootState } from '@/store';
import { useSelector } from 'react-redux';

const useUser = () => {
  const { data: user } = useSelector((state: RootState) => state.user);
  return { user };
};

export default useUser;
