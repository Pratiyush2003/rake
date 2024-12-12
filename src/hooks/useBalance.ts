/* eslint-disable @typescript-eslint/no-explicit-any */
import { RootState } from '@/store';
import { socket } from '@/store/middleware';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useCurrencies from './useCurrencies';

const useBalance = () => {
  const { currencies } = useCurrencies();
  const { data: balance } = useSelector((state: RootState) => state.balance);
  const { user, isAuthenticated } = useSelector((state: RootState) => state.authOidc);
  
  const [staticCurrency, setStaticCurrency] = useState<any[]>([]);

  useEffect(() => {
    const values = Object.values(currencies);
    
    if (values.length === staticCurrency.length)
      return;

    setStaticCurrency(values);
  }, [currencies, staticCurrency])

  useEffect(() => {
    if (!isAuthenticated) return;

    for (const sc of staticCurrency)
      socket.emit('joinBalance', {
        address: sc.address,
        network: sc.network,
        token: user?.id_token,
      });

  }, [isAuthenticated, staticCurrency, user?.id_token]);

  return { balance };
};

export default useBalance;
