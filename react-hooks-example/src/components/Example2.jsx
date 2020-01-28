import React, { useState, useEffect } from 'react';

const Example2 = () => {
  const [count, setCount] = useState(0);

  const click = () => {
    setCount(count => count + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      setCount(c => c + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={click}>Click me</button>
    </div>
  );
};

export default Example2;
