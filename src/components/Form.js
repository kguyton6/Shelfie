import React, { Component } from 'react'


export default class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            price: '',
            imgUrl: '',
            inventory: ''
        }

    }


    handleName(value){
        this.setState({name: value})
    }




    handlePrice(value){
        this.setState({ price: value })
    }



    handleImage(){}



    handleAddInventory(){}



reset(){
        
    }






    render(){
    return (
        <div>
            <input/>
            <input onChange={(e) => this.handleName(e.target.value)}/>
            <input onChange={(e) => this.handlePrice(e.target.value)}/>
            <button onClick={() => this.reset()}>Cancel</button>
            <button onClick={() => this.handleAddInventory()}>Add Inventory</button>
        </div>
        )}
    }