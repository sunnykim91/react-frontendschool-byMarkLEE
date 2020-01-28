import React, { useState, useMemo } from 'react';

function getSum(persons) {
  console.log('sum .....');
  return persons.map(person => person.age).reduce((l, r) => l + r, 0);
}

const Example9 = () => {
  const [value, setValue] = useState('');
  const [persons] = useState([
    { name: 'SUNNY', age: 30 },
    { name: 'KIM', age: 20 }
  ]);

  const change = e => {
    setValue(e.target.value);
  };

  const sum = useMemo(() => getSum(persons), []);

  return (
    <div>
      <input value={value} onChange={change} />
      <p>{sum}</p>
    </div>
  );
};

export default Example9;
