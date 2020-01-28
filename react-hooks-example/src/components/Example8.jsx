import React, { useReducer } from 'react';

const reducer = (state, action) => {
  if (action.type === 'PLUS') {
    return {
      ...state,
      count: state.count + 1
    };
  }
  return state;
};

const initialState = {
  count: 0
};

const Example8 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function click() {
    dispatch({
      type: 'PLUS'
    });
  }

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={click}>클릭</button>
    </div>
  );
};

export default Example8;
