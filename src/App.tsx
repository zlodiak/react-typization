import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

import './App.css';
import Page1 from './components/page1/Page1';
import Page2 from './components/page2/Page2';
import Page404 from './components/page404/Page404';

function App() {
  return (
    <BrowserRouter>
      <aside>
        <NavLink to="/Page1">Page1</NavLink>
        <NavLink to="/Page2">Page2</NavLink>
      </aside>    
      <main>
        <Switch>
          <Route exact path='/' render={ () => <Page1/> }/>
          <Route exact path='/Page1' render={ () => <Page1/> }/>
          <Route exact path='/Page2' render={ () => <Page2/> }/>
          <Route exact path='*' render={ () => <Page404/> }/>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
