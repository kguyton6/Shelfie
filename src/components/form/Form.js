import React, { Component } from 'react'
import '../form/form.css'
import axios from 'axios'


export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: '',
            imgUrl: 'http://dioceseofvaranasi.org.in/images/no_img.jpg',

            
        }
        this.handleName = this.handleName.bind(this)
        this.handlePrice = this.handlePrice.bind(this)
        this.resetInputs = this.resetInputs.bind(this)
        this.handleAddInventory = this.handleAddInventory.bind(this)

    }


    handleName(value) {
        this.setState({ name: value })
    }




    handlePrice(value) {
        this.setState({ price: value })
    }



    handleImage(value) {
        this.setState({ imgUrl: value })


    }



    handleAddInventory() {
       axios.post(`/api/shelfie`, {
           name: this.state.name,
           price: this.state.price,
           imgUrl: this.state.imgUrl
       } )
       .then(res => { console.log(res.body)
    }).catch(err => console.log(err, 'error'))

    }



    resetInputs() {
        this.setState({
            name: '',
            price: '',
            imgUrl: ''
        })
        
    }






    render() {
        return (
            
                <form className='form'>
                <div className='wrapper'>
                <img src={this.state.imgUrl} alt='product' height='220px' width='340px' border-style='solid' border-color='black'/><br/>
                <div className='input-wrapper'>
                Image Url:
            <input onChange={(e) => this.handleImage(e.target.value)} />
                Name:
            <input onChange={(e) => this.handleName(e.target.value)} value={this.state.name} />
                Price:
            <input onChange={(e) => this.handlePrice(e.target.value)} value={this.state.price} />
            
                <div className='buttons'>
                <button className='cancel'onClick={() => this.resetInputs()}>Cancel</button>
                <button className='add'onClick={() => this.handleAddInventory()}>Add Inventory</button>
                </div>
                </div>
                </div>
            </form>
            
      

        )
    }
}