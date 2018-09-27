import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Shelf from '../shelfs/Shelf'
// import { HashRouter as Router } from 'react-router-dom'
import './home.css'

import logo from './shelfie.png'


function Home() {

    return (
        <div className='home'>
            <div className='home-header'>
                    <img src={logo} alt='logo' className='logo'  />
              SHELFIE   
              </div>

            <br/>



            <div className='shelf'>
                <Link to='/shelf/A' ><button className='shelf-button'>
                Hats</button></Link>
                <Link to='/shelf/B' ><button className='shelf-button'>
                Shirts</button></Link>
                <Link to='/shelf/C' ><button className='shelf-button'>
                Water Bottles</button></Link>
                <Link to='/shelf/D' ><button className='shelf-button'>
                Hoodies</button></Link>
            </div>


        </div>

    )

}



export default Home 