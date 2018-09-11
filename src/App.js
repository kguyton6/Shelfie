import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard'
import Form from './components/Form'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Dashboard />
      <Form />
      <Header />


      </div>
    );
  }
}

export default App;
