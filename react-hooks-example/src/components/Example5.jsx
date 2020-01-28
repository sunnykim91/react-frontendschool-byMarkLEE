import React, { useState, useEffect } from 'react';

const Example5 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // componentDidUpdate
  }, []);

  useEffect(() => {
    return () => {
      // cleanup
    };
  }, []);

  function click() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );
};

export default Example5;
