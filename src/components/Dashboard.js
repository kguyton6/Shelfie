import React, { Component } from 'react'
import Product from './Product'


export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newInventory: []

        }
    }


        render() {
            
            

            return ( 

            <div className='dashboard'>
                <h2 inventory={console.log(this.props.inventory)}></h2>


               <Product />
             </div>
        )
    }
}