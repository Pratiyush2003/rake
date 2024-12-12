import { FC } from 'react';
import { CloseModal, EOpenModalActions, OpenModal } from './actionTypes';

export const openModal = (component: FC): OpenModal => ({
  type: EOpenModalActions.OPEN_MODAL,
  payload: component,
});

export const closeModal = (): CloseModal => ({
  type: EOpenModalActions.CLOSE_MODAL,
});
