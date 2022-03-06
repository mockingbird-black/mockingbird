import { useCallback } from 'react';
import useTombFinance from './useTombFinance';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useWithdrawFromNest = () => {
  const tombFinance = useTombFinance();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleWithdraw = useCallback(
    (amount: string) => {
      handleTransactionReceipt(
        tombFinance.withdrawShareFromNest(amount),
        `Withdraw ${amount} TSHARE from the nest`,
      );
    },
    [tombFinance, handleTransactionReceipt],
  );
  return { onWithdraw: handleWithdraw };
};

export default useWithdrawFromNest;
