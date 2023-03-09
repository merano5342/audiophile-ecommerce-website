/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

function useWindowWidth(delay = 100) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    const debouncedHandleResize = debounce(handleResize, delay);
    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, [delay]);

  return width >= 1440
    ? 'desktop'
    : width >= 768
      ? 'tablet'
      : width >= 375
        ? 'mobile'
        : 'mobile';
}

export default useWindowWidth;
