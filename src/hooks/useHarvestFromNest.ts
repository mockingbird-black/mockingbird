import { useCallback } from 'react';
import useTombFinance from './useTombFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useHarvestFromNest = () => {
  const tombFinance = useTombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleReward = useCallback(() => {
    handleTransactionReceipt(tombFinance.harvestCashFromNest(), 'Claim TOMB from Nest');
  }, [tombFinance, handleTransactionReceipt]);

  return { onReward: handleReward };
};

export default useHarvestFromNest;
