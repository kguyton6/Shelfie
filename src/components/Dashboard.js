import React, { Component } from 'react'
import Product from './Product'


export default class Dashboard extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            stuff: ''
        }
   
    }
    render(){
        const stuff = this.state.stuff 
        this.state.stuff.map((item, id) => {
            this.setState({stuff: item})
            return <h2 key={id}>{item}</h2>
        })
        return (
            <div> 
               <h2 inventory={this.props.inventory}>{stuff}</h2> 
            
            <Product />
            </div>
        )
    }
}