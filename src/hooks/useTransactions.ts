import { RootState } from '@/store';
import { socket } from '@/store/middleware';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

const useTransactions = () => {
  const { data: transactions } = useSelector(
    (state: RootState) => state.transactions,
  );
  const { user } = useSelector((state: RootState) => state.authOidc);

  const getTxs = useCallback(() => {
    socket.emit('joinRecentTx', { token: user?.id_token });
  }, [user?.id_token]);

  return { transactions, getTxs };
};

export default useTransactions;
