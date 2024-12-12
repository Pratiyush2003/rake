import { RootState } from '@/store';
import { useSelector } from 'react-redux';

const useGames = () => {
  const { data: games } = useSelector((state: RootState) => state.games);
  return { games };
};

export default useGames;
