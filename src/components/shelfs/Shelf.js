import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../shelfs/shelf.css'
import logo from '../../components/shelfie.png'
import Create_Bin from '../bins/Create_Bin'

class Shelf extends Component { 
    constructor(props){
        super(props)

        this.state = {
            bins: {},
            shelf: []
        }
        this.componentDidMount = this.componentDidMount.bind(this)

        //res.data is an array of 20 objects that contain data for store inventory.
        //I need to take all the objects with a value of 'A'. But i'm struggling
        //on that part.
    }         
    componentDidMount(){
        axios.get(`http://localhost:4800/shelf/${this.props.match.params.shelf}`).then(res => { 
     this.setState({ bins: res.data }) 
            console.log(res.data)
        }).catch(err => console.log(err, 'error'))
    }

 

    render(){
    
  
        return (
            <div className='shelf-container'>

            <div className='shelf-header' value={this.state.shelf}> Shelf 
           
            <Link to='/Home' className='shelf-logo'><img id='img' src={logo} /></Link>
            </div>
                    <div className='bin-list'>
                        <Link to='/bin/1'><button className='shelf-button-bin'>Bin 1</button></Link>
                        <Link to='/bin/2'><button className='shelf-button-bin'>Bin 2</button></Link>
                        <Link to='/bin/3'><button className='shelf-button-bin'>Bin 3</button></Link>
                        <Link to='/bin/4'><button className='shelf-button-bin'>Bin 4</button></Link>
                        <Link to='/bin/5'><button className='shelf-add-button' >
                        + Add to Inventory</button></Link> 
                </div>
            </div>
        )
    }
}

export default Shelf