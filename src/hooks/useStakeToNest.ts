import { useCallback } from 'react';
import useTombFinance from './useTombFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useStakeToNest = () => {
  const tombFinance = useTombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleStake = useCallback(
    (amount: string) => {
      handleTransactionReceipt(tombFinance.stakeShareToNest(amount), `Stake ${amount} TSHARE to the nest`);
    },
    [tombFinance, handleTransactionReceipt],
  );
  return { onStake: handleStake };
};

export default useStakeToNest;
