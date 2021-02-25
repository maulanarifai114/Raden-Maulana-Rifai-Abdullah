import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './views/Home';
import Private from './views/Private';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/private" component={Private} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
