import { RootState } from '@/store';
import { useSelector } from 'react-redux';

const useMarket = () => {
  const { data: marketList } = useSelector(
    (state: RootState) => state.marketList,
  );
  return { marketList };
};

export default useMarket;
