/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from 'react';

interface UseFetchDataProps {
  url: string;
}

export const useFetchData = <T = unknown>({ url }: UseFetchDataProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [triggerAgain, setTriggerAgain] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Error: ${res.status} - ${res.statusText}`);
      }
      const responseData: T = await res.json();
      setData(responseData);
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (url && triggerAgain) {
      fetchData();
      setTriggerAgain(false);
    }
  }, [url, fetchData, triggerAgain]);

  return { loading, data, error, setTriggerAgain };
};
