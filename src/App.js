import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard'
import Form from './components/Form'
import Header from './components/Header'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      inventory: [ 
        { name: 'hat',
          price: '$8',
          imgUrl: 'https://cdn.shopify.com/s/files/1/0636/4053/products/4_grande_bbbf9d3d-103e-4f0c-bdf4-48d51c209c7e_1800x.jpg?v=1495471940'
          },
        
        { name: 'shirt',
          price: '$10',
          imageUrl: ''}
        ]
    }
  }





  render() {
    return (
      <div className="App">
      <Dashboard inventory={this.state.props}/>
      <Form />
      <Header />


      </div>
    );
  }
}

export default App;
