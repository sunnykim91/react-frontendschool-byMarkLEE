import { useState, useEffect } from 'react';

export default function useWindowWidth() {
  // 초기화
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize); //componentWillUnMount
    };
  }, []);

  return width;
}
