import React from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from "react-router-dom";

import './App.css';
import Page1 from './components/page1/Page1';
import Page2 from './components/page2/Page2';
import Page3 from './components/page3/Page3';
import Page404 from './components/page404/Page404';

function App() {
  return (
    <BrowserRouter>
      <aside>
        <NavLink to="/Page1">add msg to redux</NavLink>
        <NavLink to="/Page2">messages feed</NavLink>
        <NavLink to="/Page3">add msg to DB</NavLink>
      </aside>    
      <main>
        <Switch>
          <Route exact path='/' render={ () => <Page1/> }/>
          <Route exact path='/Page1' render={ () => <Page1/> }/>
          <Route exact path='/Page2' render={ () => <Page2/> }/>
          <Route exact path='/Page3' render={ () => <Page3/> }/>
          <Route path='/404' render={ () => <Page404/> }/>
          <Redirect from='*' to='/404' />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
