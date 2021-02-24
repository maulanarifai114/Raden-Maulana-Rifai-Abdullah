import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './views/Home';
import DetailRepo from './views/DetailRepo';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail" component={DetailRepo} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
