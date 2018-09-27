import React, { Component } from 'react'
import axios from 'axios'
import logo from './shelfie.png'
import no_image from './no_image.png'
import { Link, Route } from 'react-router-dom'
import './create.css'

export default class Create_Bin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: null,
            image_url: no_image,

        }
        this.addInventory = this.addInventory.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handlePrice = this.handlePrice.bind(this)
        this.handleImage = this.handleImage.bind(this)

    }


    addInventory(name, price, image_url) {
        axios.put(`/api/shelf/${this.props.match.params.id}/bin/${this.props.match.params.bin}`, { name, price, image_url })
            .then(() => this.props.history.push(`/shelf/${this.props.match.params.id}/bin/${this.props.match.params.bin}`))

            .catch(err => console.log(err, 'error'))

    }

    handleName(value) {
        this.setState({ name: value })


    }

    handlePrice(value) {
        this.setState({ price: value })

    }


    handleImage(value) {
        this.setState({ image_url: value })
        return this.state.image_url
    }



    render() {

        return (
            <div className='create-container'>
                <div className='create-header'>
                    <Link to='/home' className='link'> <img className='create-logo' src={logo} /></Link>
                    <Link to={`/shelf/${this.props.match.params.id}`} className='shelf-title'>
                        {`Shelf ${this.props.match.params.id}`} </Link>
                    <div className='create-title'>{`Add to Bin ${this.props.match.params.bin}`} </div>
                </div>

                <main className='container-1'>
                    <div className='create-inputs'>




 <input placeholder='Title Your Image' onChange={(e) => this.handleName(e.target.value)} />
                       <span className='dollar-sign'>$</span>
                        <input className='dollar-input'     type="number" name="HPR" min="0" step="0.01" required onChange={(e) => this.handlePrice(e.target.value)} placeholder='0.00' />


                        <input placeholder='image url' onChange={(e) => this.handleImage(e.target.value)} />
                        <br /><br />
                        <button className='add' onClick={() => this.addInventory(this.state.name, this.state.price, this.state.image_url)}>
                            + Add Inventory</button>
                    </div>
                    <div className='create-container2'>
                        <img className='url' src={this.state.image_url} />
                        <br />
                        <div className='add_inventory'>

                        </div>
                    </div>

                </main>
            </div>
        )
    }
}