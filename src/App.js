import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes'
import { HashRouter, Link } from 'react-router-dom'




class App extends Component {
  render() {


    return (
      <div className='App'>
        <div className='links'>
          <div className='shelf'>
          <Link to='/shelfie/shelf/A'><button>Shelf A</button></Link>
          <Link to='/shelfie/shelf/B'><button>Shelf B</button></Link>
          <Link to='/shelfie/shelf/C'><button>Shelf C</button></Link>
          <Link to='/shelfie/shelf/D'><button>Shelf D</button></Link>
          </div>
        </div>
        {routes}
      </div>
    );
  }
}

export default App;
