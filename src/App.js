import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard'
import Form from './components/Form'
import Header from './components/Header'
import axios from 'axios'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      inventory_list: []
    }

  }
    

  render() {
   this.state.inventory_list.map((items) => {
      <li>{items}</li>
      this.setState({inventory_list: items})
    })
    return (
      <div className="App">
     
      <Dashboard value={this.state.inventory_list}/>
      <Form />
      <Header />


      </div>
    );
  }
}

export default App;
