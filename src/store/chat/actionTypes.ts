import { UnknownAction } from 'redux';

export enum EChatsActionsTypes {
  TOGGLE_CHAT_MODEL = 'TOGGLE_CHAT_MODEL',
}

export interface ToggleChatModel extends UnknownAction {
  type: typeof EChatsActionsTypes.TOGGLE_CHAT_MODEL;
  payload: boolean;
}