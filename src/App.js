import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListOfShelfs from './components/home/ListOfShelfs'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import SelectedShelf from './components/shelfs/SelectedShelf'
import Bin from './components/bins/Bin'



class App extends Component {
  render() {
   return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' />
            <Route path='/home' component={ListOfShelfs} />
            <Route path='/shelf/:id' component={ SelectedShelf }/>
            <Route path='/bin/:id' component={ Bin } />
          </Switch>
         </div>
      </Router>
    );
  }
}

export default App;
