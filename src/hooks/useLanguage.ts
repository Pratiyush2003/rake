import { RootState, useDispatch } from '@/store';
import { setLanguageDispatcher } from '@/store/languages/thunk';
import { LanguageState } from '@/store/languages/types';
import { useSelector } from 'react-redux';

const useLanguage = () => {
  const dispatch = useDispatch();

  const {locale: language} = useSelector((state: RootState) => state.language);

  const setLanguage = (message: Partial<LanguageState>) => {
    dispatch(setLanguageDispatcher(message));
  };

  return { language, setLanguage };
};

export default useLanguage;
