import { useRef } from 'react';

const useScrollToView = (targetRefs = []) => {
  const itemRefs = useRef(targetRefs);

  const scrollToItem = (index) => {
    if (itemRefs.current[index]) {
      itemRefs.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return {
    itemRefs,
    scrollToItem,
  };
};

export default useScrollToView;
