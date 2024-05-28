import { useEffect, useRef } from "react";

const useEffectOnce = (cb: () => void | (() => void)) => {
  const isOnceRef = useRef(false);

  useEffect(() => {
    if (!isOnceRef.current) {
      cb();
      isOnceRef.current = true;
    }
  }, []);
};

export default useEffectOnce;
