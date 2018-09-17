import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from '../shelfs/SelectedShelf'
import {HashRouter as Router} from 'react-router-dom'
import '../home/home.css'


const Home = () => {
        return (
        <div className='App'>
            <div className='shelf'>
            <Link to='/shelf/A'><button>Shelf A</button></Link>
            <Link to='/shelf/B'><button>Shelf B</button></Link>
            <Link to='/shelf/C'><button>Shelf C</button></Link>
            <Link to='/shelf/D'><button>Shelf D</button></Link>
            </div>
            
           
            </div>
       
        )
    }



export default Home 