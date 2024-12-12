// reducer.ts
import { ChatsState } from './types';
import { ToggleChatModel, EChatsActionsTypes } from './actionTypes';

const initialState: ChatsState = {
  isChatModelOpen: true,
};

const chatsReducer = (
  state: ChatsState = initialState,
  action: ToggleChatModel,
): ChatsState => {
  switch (action.type) {
    case EChatsActionsTypes.TOGGLE_CHAT_MODEL:
      return {
        ...state,
        isChatModelOpen: action.payload,
      };
    default:
      return state;
  }
};

export default chatsReducer;
