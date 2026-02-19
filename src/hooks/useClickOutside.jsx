import {useEffect, useRef} from 'react';

const useClickOutside = (handler) => {
  const ref = useRef(null);

  useEffect(() => {
    const listener = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [handler]);

  return ref;
};

export default useClickOutside;
