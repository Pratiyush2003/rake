import { triggerToggleChatModel } from './../store/chat/thunk';
import { RootState, useDispatch } from '@/store';
import { useSelector } from 'react-redux';

export const useToggleChatSection = () => {
  const dispatch = useDispatch();
  const isChatModelOpen = useSelector(
    (state: RootState) => state.chat.isChatModelOpen,
  );
  const toggleChatSection = () => {
    dispatch(triggerToggleChatModel());
  };
  return {
    isChatModelOpen,
    toggleChatSection,
  };
};
