import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom'
import Bin from '../bins/Bin'

export default class SelectedShelf extends Component {
    render() {
        return (


                    <div className='App'>
                    <div className='bin'>
                        <Link to='/bin/1'><button>Bin 1</button></Link>
                        <Link to='/bin/2'><button>Bin 2</button></Link>
                        <Link to='/bin/3'><button>Bin 3</button></Link>
                        <Link to='/bin/4'><button>Bin 4</button></Link>
                    </div>

                </div>


        )
    }
}