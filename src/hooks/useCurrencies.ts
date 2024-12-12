import { RootState, useDispatch } from '@/store';
import { currencySelectDispatcher } from '@/store/currencies/thunk';
import { ICurrency } from '@/store/currencies/types';
import { useSelector } from 'react-redux';

const useCurrencies = () => {
  const dispatch = useDispatch();
  const { data: currencies } = useSelector(
    (state: RootState) => state.currencies,
  );

  const selectedCurrency = useSelector(
    (state: RootState) => state.selectedCurrency,
  );

  const selectCurrency = (message: ICurrency) => {
    dispatch(currencySelectDispatcher(message));
  };

  return { currencies, selectedCurrency, selectCurrency };
};

export default useCurrencies;
