// Hook

import React from 'react';
import { useHistory } from 'react-router-dom';

const LoginButton = props => {
  const history = useHistory();
  function login() {
    setTimeout(() => {
      history.push('/');
    }, 1000);
  }
  return <button onClick={login}>로그인하기</button>;
};

export default LoginButton;
