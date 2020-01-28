import React, { useState } from 'react';

const Example2 = () => {
  const [state, setState] = useState({
    count: 0
  });

  const click = () => {
    setState(state => ({ count: state.count + 1 }));
  };

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={click}>Click me</button>
    </div>
  );
};

export default Example2;
