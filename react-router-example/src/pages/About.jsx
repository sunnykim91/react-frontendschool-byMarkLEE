import React from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

const About = () => {
  const { search } = useLocation();
  const { name } = queryString.parse(search);
  console.log(name);
  return (
    <div>
      <h2>About 페이지 입니다.</h2>
      {name && <p>name 는 {name} 입니다.</p>}
    </div>
  );
};

export default About;
