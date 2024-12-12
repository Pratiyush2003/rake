import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { FC } from 'react';
import { CloseModal, OpenModal } from './actionTypes';
import { closeModal, openModal } from './actions';

export const triggerOpenModal = (
  message: FC,
): ThunkAction<void, RootState, unknown, OpenModal> => {
  return (dispatch) => {
    dispatch(openModal(message));
  };
};
export const triggerCloseModal = (): ThunkAction<
  void,
  RootState,
  unknown,
  CloseModal
> => {
  return (dispatch) => {
    dispatch(closeModal());
  };
};
