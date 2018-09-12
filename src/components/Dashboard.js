import React, { Component } from 'react'
import Product from './Product'


export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        
       this.state = {
           products: []
       }
    }
    

        render() {
           

            return ( 

            <div className='dashboard'>
                <div>
                    {this.props.inventory_list}
                </div>


               <Product />
             </div>
        )
    }
}