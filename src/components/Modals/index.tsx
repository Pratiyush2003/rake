import { FC } from 'react';
import { Dialog, DialogContent } from '../ui/dialog';
import { useOpenModal } from '@/hooks/useOpenModal';

const ModalWrapper: FC = () => {
  const { open, component: Component, closeModal } = useOpenModal();
  return (
    <Dialog open={open} onOpenChange={() => closeModal()}>
      {Component && (
        <DialogContent>
          <Component />
        </DialogContent>
      )}
    </Dialog>
  );
};

export default ModalWrapper;
