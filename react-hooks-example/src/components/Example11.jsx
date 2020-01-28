import React, { useRef, useEffect, useState } from 'react';

const Example11 = () => {
  const [count, setCount] = useState(0);
  const inputCreateRef = React.createRef();
  const inputUseRef = useRef();
  console.log(inputCreateRef.current);
  console.log(inputUseRef.current);
  useEffect(() => {
    setTimeout(() => {
      setCount(count => count + 1);
    }, 1000);
  });
  return (
    <div>
      <p>{count}</p>
      <input ref={inputCreateRef} />
      <input ref={inputUseRef} />
    </div>
  );
};

export default Example11;
