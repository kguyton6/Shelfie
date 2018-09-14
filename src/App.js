import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard'
import Form from './components/form/Form'
import Header from './components/Header'
import axios from 'axios'



class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      inventory_list: []
    }

  }
    
  componentDidMount(){
    axios.get(`http://localhost:4800/api/shelfie`)
    .then((res) => { 
      this.setState({inventory_list: res.products})
    }).catch(err => console.log(err, 'kims error'))
  }



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
