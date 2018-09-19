import React, { Component } from 'react'
import axios from 'axios'
import logo from './shelfie.png'

export default class Create_Bin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newInventory: []
        }
        // this.add = this.add.bind(this)
    }

    // add(){
    //     axios.post(`/bin/${this.props.match.inventory}`)
    //     .then(res => {
    //         this.setState({ newInventory: res.data })
    //     }).catch(err => console.log(err, 'not working'))
    // }


    render(){
        return (
            <div className='bin_container'>
            <nav className='bin_header'>
            <span><img src={logo} /></span>
         <span className='bin-span2'> Shelf </span>  
            <span className='bin-span2'>Bin 5</span>
            </nav>
            Product Name <input /> 
            Price <input />
            <div className='add_inventory'>
            <button>+ Add Inventory</button>
            </div>
            </div>
        )
    }
}