import { useCallback, useEffect, useState } from 'react';
import useTombFinance from './useTombFinance';
import config from '../config';

const useFetchNestAPR = () => {
  const [apr, setApr] = useState<number>(0);
  const tombFinance = useTombFinance();

  const fetchNestPR = useCallback(async () => {
    setApr(await tombFinance.getNestAPR());
  }, [tombFinance]);

  useEffect(() => {
    fetchNestPR().catch((err) => console.error(`Failed to fetch nest apr: ${err.stack}`));
    const refreshInterval = setInterval(fetchNestPR, config.refreshInterval);
    return () => clearInterval(refreshInterval);
  }, [setApr, tombFinance, fetchNestPR]);

  return apr;
};

export default useFetchNestAPR;
