import { useEffect, useRef, useState } from 'react';

const useIntersection = (options) => {
  const targetRefs = useRef([]);
  const observerRef = useRef(null);
  const [intersectingIndex, setIntersectingIndex] = useState(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const intersectingEntry = entries.find((entry) => entry.isIntersecting);

        if (intersectingEntry) {
          const index = targetRefs.current.indexOf(intersectingEntry.target);
          setIntersectingIndex(index);
        } else {
          setIntersectingIndex(null);
        }
      },
      options,
    );

    targetRefs.current.forEach((target) => {
      if (target) {
        observerRef.current.observe(target);
      }
    });

    return () => {
      targetRefs.current.forEach((target) => {
        if (target) {
          observerRef.current.unobserve(target);
        }
      });
    };
  }, [options]);

  const addTargetRef = (ref) => {
    if (ref && !targetRefs.current.includes(ref)) {
      targetRefs.current.push(ref);
    }
  };

  const reset = () => {
    targetRefs.current.forEach((target) => {
      if (target) {
        observerRef.current.unobserve(target);
      }
    });

    targetRefs.current = [];
  };

  return [addTargetRef, intersectingIndex, targetRefs, reset];
};

export default useIntersection;
