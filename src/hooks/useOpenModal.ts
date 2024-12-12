import { RootState, useDispatch } from '@/store';
import { triggerCloseModal, triggerOpenModal } from '@/store/modal/thunk';
import { FC } from 'react';
import { useSelector } from 'react-redux';

export const useOpenModal = () => {
  const dispatch = useDispatch();

  const openModal = (component: FC) => {
    dispatch(triggerOpenModal(component));
  };
  const closeModal = () => {
    dispatch(triggerCloseModal());
  };

  const { open, component } = useSelector(
    (state: RootState) => state.openModal,
  );

  return {
    open,
    component,
    openModal,
    closeModal,
  };
};
