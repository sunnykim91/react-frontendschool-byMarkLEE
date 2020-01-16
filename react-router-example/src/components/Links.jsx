import React from 'react';
import { Link } from 'react-router-dom';

function Links() {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/profile'>Profile</Link>
      </li>
      <li>
        <Link to='/profile/1'>Profile/1</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/about?name=mark'>About?name=mark</Link>
      </li>
    </ul>
  );
}

export default Links;
