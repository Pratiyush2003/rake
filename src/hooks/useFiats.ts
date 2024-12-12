import { RootState, useDispatch } from '@/store';
import { fiatSelectDispatcher } from '@/store/fiats/thunk';
import { IFiat } from '@/store/fiats/types';
import { useSelector } from 'react-redux';

const useFiats = () => {
  const dispatch = useDispatch();
  const { data: fiats } = useSelector((state: RootState) => state.fiats);

  const selectedFiat = useSelector((state: RootState) => state.selectedFiat);

  const selectFiat = (message: IFiat) => {
    dispatch(fiatSelectDispatcher(message));
  };

  return { fiats, selectedFiat, selectFiat };
};

export default useFiats;
