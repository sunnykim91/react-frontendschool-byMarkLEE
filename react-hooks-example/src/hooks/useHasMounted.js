import React, { useState, useEffect } from 'react';

export default function useHasMounted() {
  //초기화
  const [hasMounted, setHasMounted] = useState(false);
  //변경점

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}
