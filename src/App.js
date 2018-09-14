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
    this.componentDidMount = this.componentDidMount.bind(this)

  }
    
  componentDidMount(){
    axios.get(`http://localhost:4800/api/shelfie`)
    .then((res) =>  { 
      this.setState({inventory_list: res.data})
    }).catch(err => console.log(err, 'kims error'))
  }



  render() {
   let products =this.state.inventory_list.map((product) => {
     return <li>{product}</li>
   })
    return (
      <div className="App">
     
      <Dashboard inventory={this.state.inventory_list} value={products}/>
      <Form />
      <Header />


      </div>
    );
  }
}

export default App;
