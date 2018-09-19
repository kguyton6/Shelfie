import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from '../shelfs/Shelf'
import { HashRouter as Router } from 'react-router-dom'
import './home.css'

import logo from './shelfie.png'


const Home = () => {
    return (
        <div className='App'>
            <header>
              
              <img src={logo} />
           <span className='text'>SHELFIE</span> 
             
                </header>
            <div className='shelf'>
                <Link to='/shelf/A' ><button className='shelf-button'>Shelf A</button></Link>
                <Link to='/shelf/B' ><button className='shelf-button'>Shelf B</button></Link>
                <Link to='/shelf/C' ><button className='shelf-button'>Shelf C</button></Link>
                <Link to='/shelf/D' ><button className='shelf-button'>Shelf D</button></Link>
            </div>


        </div>

    )
}



export default Home 