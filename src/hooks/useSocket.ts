import { socket } from '@/store/middleware';
import { useEffect } from 'react';

const useSocket = <P>(event: string, payload: P) => {
  useEffect(() => {
    socket.emit(event, payload);

    return () => {
      socket.off(event);
    };
  }, [event, payload])
};

export default useSocket;
