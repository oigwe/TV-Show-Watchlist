import React, { Component } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

//PAGE
  //HOME
  //MASTER USER LIST
  //USER PROFILE PAGE
  //USER ADD SHOW
  //SPECIFIC SHOW
  //MASTER SHOWS LIST


class App extends Component {
  render() {
    return (
        <HashRouter>
          <Switch>
            <Route path='/'/>
            <Route path='/users' exact/>
            <Route path='/users:id' />
            <Route path='/user/post'/>
            <Route path='/shows' exact />
            <Route path='/show/:id' />
          </Switch>
        </HashRouter>
    );
  }
}

export default App;
