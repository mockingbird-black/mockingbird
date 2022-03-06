import { useCallback, useEffect, useState } from 'react';
import useTombFinance from './useTombFinance';
import useStakedBalanceOnNest from './useStakedBalanceOnNest';

const useNestVersion = () => {
  const [nestVersion, setNestVersion] = useState('latest');
  const tombFinance = useTombFinance();
  const stakedBalance = useStakedBalanceOnNest();

  const updateState = useCallback(async () => {
    setNestVersion(await tombFinance.fetchNestVersionOfUser());
  }, [tombFinance?.isUnlocked, stakedBalance]);

  useEffect(() => {
    if (tombFinance?.isUnlocked) {
      updateState().catch((err) => console.error(err.stack));
    }
  }, [tombFinance?.isUnlocked, stakedBalance]);

  return nestVersion;
};

export default useNestVersion;
