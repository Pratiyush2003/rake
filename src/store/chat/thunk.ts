// store/chat/thunk.ts
import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { ToggleChatModel } from './actionTypes';
import { toggleChatModel } from './actions';

export const triggerToggleChatModel = (): ThunkAction<
  void,
  RootState,
  unknown,
  ToggleChatModel
> => {
  return (dispatch, getState) => {
    const currentState = getState().chat.isChatModelOpen;
    dispatch(toggleChatModel(!currentState));
  };
};
