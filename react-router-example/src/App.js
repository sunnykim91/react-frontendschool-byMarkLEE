import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Links from './components/Links';
import NavLinks from './components/NavLinks';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Links />
      <Switch>
        <Route path='/profile/:id' component={Profile} />
        <Route path='/profile' component={Profile} />
        <Route path='/about' component={About} />
        <Route path='/' exact component={Home} />
        <Route path='login' component={Login} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
