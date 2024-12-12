/* eslint-disable @typescript-eslint/no-explicit-any */
import socketClient from 'socket.io-client';
import { ThunkMiddleware } from 'redux-thunk';

import { EActionsTypes } from './socket/types';
import { EBetsActionsTypes } from './bets/actionTypes';

import {
  handleCloseBetSocketEvent,
  handlePlaceBetSocketEvent,
} from './bets/events';
import { handleDisconnectSocket } from './socket/events';
// import { ECurrenciesActionsTypes } from './currencies/actionTypes';

interface GenericAction<TType extends string, TPayload = void> {
  type: TType;
  payload?: TPayload;
}

const URL = import.meta.env.VITE_SOCKET_URL;

export const socket = socketClient(URL, {
  transports: ['websocket'],
});

const socketMiddleware: ThunkMiddleware = () => {
  return (next) => (_action) => {
    const action = _action as GenericAction<string, any>;
    // if (action.type === ECurrenciesActionsTypes.CONNECT_CURRENCIES && action.payload){
    //   socket.emit('joinBalance', {
    //     address: action.payload.address,
    //     network: action.payload.network,
    //     token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjI5MDg3NzU0NTk3NTM4MzM0MSIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FjY291bnQucmFrZS5jb20iLCJzdWIiOiIyOTA4NzY3Mzc1MTU2MTk2MjQiLCJhdWQiOlsiMjkwODc3NjA4MzAyODA2MzEyIiwiMjkwODc3NTgzNTczMTI0Mzk3Il0sImV4cCI6MTcyOTkxNTc3NiwiaWF0IjoxNzI5ODcyNTc2LCJhdXRoX3RpbWUiOjE3Mjk4NzI1MjQsIm5vbmNlIjoicjJ2bDUxeWd2IiwiYW1yIjpbInB3ZCJdLCJhenAiOiIyOTA4Nzc2MDgzMDI4MDYzMTIiLCJjbGllbnRfaWQiOiIyOTA4Nzc2MDgzMDI4MDYzMTIiLCJhdF9oYXNoIjoiT2hoZFg2LXN6ei1peGRmUThaN1JvQSIsInNpZCI6IlYxXzI5MDg3NzUwMDQyNTI0MTg5NiJ9.FOC1cenWgQx2Ci39wC--8EH-MaXW4TcCidMJngLTVbgrJOYZqRQE98qSHs_PQIXk3lmYanFUV7NnyxR5AEx_oI50KmkIzqKnSaEEAPjevgh1FYw8Lb8vmWh7v0drjAWT0247tyPsGMT64Qgl8Erm8mo4ouugTg7CLvQ9M4q4bcWKVXI5fLJrQ3UzoI8KB_TeOcAimRg8xKmI03WhlT4e_SL0H9D7am55lT7vD5s2PQx7jxnqDgVoRkM_maMXkoCaZTEC_3NlfFU8JbdQUz8V3I8f_x1xPERLBe28OeGs1UNqQqdi_XClbWs__gxOzOXOPKj3eM6SdiE2Ei0bvjL-EA",
    //   });
    // }

    if (action.type === EBetsActionsTypes.BET && action.payload) {
      handlePlaceBetSocketEvent(socket, action.payload);
    }
    if (action.type === EBetsActionsTypes.CLOSE_BET && action.payload) {
      handleCloseBetSocketEvent(socket, action.payload);
    }

    if (action.type === EActionsTypes.DISCONNECT) {
      handleDisconnectSocket(socket);
    }

    return next(action);
  };
};

export default socketMiddleware;
