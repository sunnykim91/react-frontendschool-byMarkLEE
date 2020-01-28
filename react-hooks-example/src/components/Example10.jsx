import React, { useState, useMemo, useCallback } from 'react';

const Person = React.memo(({ index, name, age, click }) => {
  console.log(name, age);

  function onClick() {
    click(index);
  }

  return (
    <li>
      {name},{age},<button onClick={onClick}>한해가 갔다</button>
    </li>
  );
});

const Example10 = () => {
  const [value, setValue] = useState('');
  const [persons, setPersons] = useState([
    { name: 'SUNNY', age: 30 },
    { name: 'KIM', age: 20 }
  ]);

  const change = e => {
    setValue(e.target.value);
  };

  const click = useCallback(index => {
    const newPersons = [...persons];
    newPersons[index].age = newPersons[index].age + 1;
  }, []);

  return (
    <div>
      <input value={value} onChange={change} />
      <ul>
        {persons.map((person, i) => (
          <Person
            index={i}
            key={i}
            name={person.name}
            age={person.age}
            click={click}
          />
        ))}
      </ul>
    </div>
  );
};

export default Example10;
