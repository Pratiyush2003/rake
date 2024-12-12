import { FC } from 'react';
import { UnknownAction } from 'redux';

export enum EOpenModalActions {
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
}

export interface OpenModal extends UnknownAction {
  type: EOpenModalActions.OPEN_MODAL;
  payload: FC;
}

export interface CloseModal extends UnknownAction {
  type: EOpenModalActions.CLOSE_MODAL;
}
