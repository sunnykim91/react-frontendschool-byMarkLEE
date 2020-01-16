import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = { color: 'green' };

export default function NavLinks() {
  return (
    <ul>
      <li>
        <NavLink exact to='/' activeStyle={activeStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to='/profile' activeStyle={activeStyle}>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to='/profile/1' activeStyle={activeStyle}>
          Profile/1
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/about'
          activeStyle={activeStyle}
          isActive={(match, location) => {
            if (location.pathname !== '/about') return false;
            const searchParams = new URLSearchParams(location.search);
            return !searchParams.has('name');
          }}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/about?name=mark'
          activeStyle={activeStyle}
          isActive={(match, location) => {
            if (location.pathname !== '/about') return false;
            const searchParams = new URLSearchParams(location.search);
            return searchParams.has('name');
          }}
        >
          About?name=mark
        </NavLink>
      </li>
    </ul>
  );
}
