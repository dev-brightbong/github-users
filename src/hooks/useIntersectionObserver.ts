import { useCallback, useEffect, useRef } from "react";

type UseIntersectionObserverProps = {
  callback: (
    entry?: IntersectionObserverEntry,
    observer?: IntersectionObserver
  ) => void;
  options?: IntersectionObserverInit;
};

const useIntersectionObserver = ({
  callback,
  options = { threshold: 0.5 },
}: UseIntersectionObserverProps) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (entry.isIntersecting) {
        callback(entry, observer);
      }
    },
    [callback]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);

    const target = targetRef.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [handleIntersection, options]);

  return { targetRef };
};

export default useIntersectionObserver;
