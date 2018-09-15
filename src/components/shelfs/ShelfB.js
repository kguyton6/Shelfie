import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ShelfB extends Component {
    render() {
        return (
            <div className='App'>
                <div className='links'>
                    <div className='shelf'>
                        <Link to='shelfie/bin/:id/1'><button>Bin 1</button></Link>
                        <Link to='shelfie/bin/:id/2'><button>Bin 2</button></Link>
                        <Link to='shelfie/bin/:id/3'><button>Bin 3</button></Link>
                        <Link to='shelfie/bin/:id/4'><button>Bin 4</button></Link>
                    </div>
                </div>
                
            </div>
        )
    }
}