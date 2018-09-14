import React, { Component } from 'react'
import Product from './Product'


export default class Dashboard extends Component {
    constructor(props) {
        super(props)
    }
        render() {
           

            return ( 

            <div className='dashboard'>
                
                 
                


               <Product value={this.props.inventory_list}/>
             </div>
        )
    }
}