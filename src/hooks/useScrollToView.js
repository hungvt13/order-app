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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return {
    itemRefs,
    scrollToItem,
    scrollToTop,
  };
};

export default useScrollToView;
