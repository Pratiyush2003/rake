import { RootState, useDispatch } from '@/store';
import { closeBetDispatcher, placeBetDispatcher } from '@/store/bets/thunk';
import { IBet } from '@/store/bets/types';
import { socket } from '@/store/middleware';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

const useBets = () => {
  const dispatch = useDispatch();

  const { data: bets } = useSelector((state: RootState) => state.bets);

  const placeBet = (message: IBet) => {
    dispatch(placeBetDispatcher(message));
  };

  const closeBet = (message: IBet) => {
    dispatch(closeBetDispatcher(message));
  };

  const getRecentBets = useCallback(() => {
    socket.emit('joinRecentBets');
  }, []);

  const getRecentBetsByGame = useCallback((gameId: number) => {
    socket.emit('joinRecentBetsByGame', gameId);
  }, []);

  return {
    bets,
    placeBet,
    closeBet,
    getRecentBets,
    getRecentBetsByGame,
  };
};

export default useBets;
