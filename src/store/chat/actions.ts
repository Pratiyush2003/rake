import { EChatsActionsTypes, ToggleChatModel } from "./actionTypes";

export const toggleChatModel = (value: boolean): ToggleChatModel => ({
    type: EChatsActionsTypes.TOGGLE_CHAT_MODEL,
    payload: value,
});
