import { CloseModal, EOpenModalActions, OpenModal } from './actionTypes';
import { OpenModalState } from './types';

export const openModalInitialState: OpenModalState = {
  open: false,
  component: null,
};

const openModalReducer = (
  state: OpenModalState = openModalInitialState,
  action: OpenModal | CloseModal,
): OpenModalState => {
  switch (action.type) {
    case EOpenModalActions.OPEN_MODAL:
      return { open: true, component: action.payload };
    case EOpenModalActions.CLOSE_MODAL:
      return { open: false, component: null };
    default:
      return state;
  }
};

export default openModalReducer;
