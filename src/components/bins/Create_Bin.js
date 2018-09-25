import React, { Component } from 'react'
import axios from 'axios'
import logo from './shelfie.png'
import no_image from './no_image.png'
import { Link } from 'react-router-dom'
import './bin.css'

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
        console.log(name, price, image_url)
        axios.put(`/api/shelf/${this.props.match.params.id}/bin/${this.props.match.params.bin}`, { name, price, image_url })
            .then()

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
            <div className='create'>
                <div className='bin-header'>
                    <Link to='/home' className='bin-logo'><img id='img' src={logo} /></Link>
                    <span> {`Shelf ${this.props.match.params.id}`} </span><b/>
                    <span>{`Add to Bin ${this.props.match.params.bin}`} </span>
                </div>
                <br />

                Product Name <input onChange={(e) => this.handleName(e.target.value)} />
                Price <input onChange={(e) => this.handlePrice(e.target.value)} placeholder='$0.00' />
                <input placeholder='image url' onChange={(e) => this.handleImage(e.target.value)} />
                <div className='add_inventory'>
                    <button onClick={() => this.addInventory(this.state.name, this.state.price, this.state.image_url)}>+ Add Inventory</button>
                    <br />
                    <br />
                    <div className='create_image'>

                        <img className='bin-image' src={this.state.image_url} />

                    </div>

                </div>
            </div>
        )
    }
}