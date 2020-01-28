import React from 'react';
import './App.css';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';
import Example4 from './components/Example4';
import Example5 from './components/Example5';
import Example8 from './components/Example8';
import Example9 from './components/Example9';
import useWindowWidth from './hooks/useWindowWidth';
import withHasMounted from './hooks/withHasMounted';
import useHasMounted from './hooks/useHasMounted';
import Example10 from './components/Example10';

function App({ hasMounted }) {
  const width = useWindowWidth();
  const hasMounted2 = useHasMounted();
  return (
    <div className='App'>
      <header className='App-header'>
        <p>{hasMounted && 'Mounted'}</p>
        <p>{hasMounted2 && 'Mounted'}</p>
        <p>{width}</p>
        <Example1 />
        <Example2 />
        <Example3 />
        <Example4 />
        <Example5 />
        <Example8 />
        <Example9 />
        <Example10 />
      </header>
    </div>
  );
}

export default withHasMounted(App);
