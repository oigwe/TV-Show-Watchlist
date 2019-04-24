import React, { Component } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

//COMPONENTS
import Header from './components/header'

//PAGE
  //HOME
  import Home from './containers/home';
  //MASTER USER LIST
  import Users from './containers/users';
  //USER PROFILE PAGE
  import UserProfile from './containers/userProfile';
  //USER ADD SHOW
  import AddPost from './components/showPost';
  //MASTER SHOW PROFILE
  import ShowProfile from './containers/showProfile';
  //USER SHOW PROFILE
  import ShowProfileUser from './containers/showProfileUser';
  //MASTER SHOWS LIST
  import Shows from './containers/shows';


class App extends Component {
  render() {
    return (
        <HashRouter>
          <Header/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/user/post'  component={AddPost}/>
            <Route path='/user/:id' exact component={UserProfile} />
            <Route path='/users' exact component={Users}/>
            <Route path='/shows' exact component={Shows} />
            <Route path='/show/:id' exact component={ShowProfile}/>
            <Route path='/show/:title/user/:id' exact component={ShowProfileUser}/>
            <Route path='/genres' />
          </Switch>
        </HashRouter>
    );
  }
}

export default App;


