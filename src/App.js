import React, { Component } from 'react';
import Home from './components/home/Home'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Shelf from './components/shelfs/Shelf'
import Bin from './components/bins/Bin'
import Create_Bin from './components/create/Create_Bin'
import './reset.css'



class App extends Component {
  render() {
   return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' />
            <Route path='/home' component={ Home } />
            <Route exact path='/shelf/:id' component={ Shelf }/>
            <Route path='/shelf/:id/bin/:bin' component={ Bin } />
            <Route path='/shelf/:id/add/:bin' component={Create_Bin} />
          </Switch>
         </div>
      </Router>
    );
  }
}

export default App;