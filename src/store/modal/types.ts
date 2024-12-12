import { FC } from 'react';

export interface OpenModalState {
  open: boolean;
  component: FC | null;
}
