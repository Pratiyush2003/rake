/* eslint-disable @typescript-eslint/no-explicit-any */
import { RootState } from '@/store';
import { triggerSetSearchBarFocus } from '@/store/game/events';
import { useSelector, useDispatch } from 'react-redux';

export const useSearchBarFocused = () => {
  const dispatch = useDispatch<any>();

  const { isSearchBarFocused } = useSelector((state: RootState) => state.games);

  const onFocus = () => {
    dispatch(triggerSetSearchBarFocus(true));
  };

  const onBlur = () => {
    dispatch(triggerSetSearchBarFocus(false));
  };

  return { onFocus, onBlur, isSearchBarFocused };
};
