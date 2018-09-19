import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Shelf from './components/shelfs/Shelf'
import Bin from './components/bins/Bin'
import Create_Bin from './components/bins/Create_Bin'



class App extends Component {
  render() {
   return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' />
            <Route path='/home' component={ Home } />
            <Route path='/shelf/:id' component={ Shelf }/>
            <Route path='/bin/:id' component={ Bin } />
          </Switch>
         </div>
      </Router>
    );
  }
}

export default App;
