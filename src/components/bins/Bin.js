import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './bin.css'
import logo from './shelfie.png'


export default class Bin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: '',
            image_url: '',
            disabled: true

        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handlePrice = this.handlePrice.bind(this)
    }


    componentDidMount() {
        axios.get(`/api/shelf/${this.props.match.params.id}/bin/${this.props.match.params.bin}`)
            .then(res => {
                // console.log(res.data[0].name)
                this.setState({
                    name: res.data[0].name,
                    price: res.data[0].price,
                    image_url: res.data[0].image_url
                })
            }).catch(err => console.log(err, 'error'))

    }

    handleName(value) {
        this.setState({ name: value })
    }

    handlePrice(value) {
        this.setState({ price: value })
    }

    handleEdit() {
        this.setState({ disabled: false })

    }

    handleSave(value) {
        this.setState({ name: value, price: value, image_url: value })
        axios.put(`/api/shelf/${this.props.match.params.id}/bin/${this.props.match.params.bin}`, this.state.name, this.state.price, this.state.image_url)
            .then(res => { res.status(200).send('saved') })
    }

    render() {

        return (
            <div className='bin'>
                <div className='bin-header'>
                    <span> {`Shelf ${this.props.match.params.id}`} </span>
                    <span>{`Bin ${this.props.match.params.bin}`} </span>
                </div>
                <main className='bin-body'>
                    }
                    <div className='input'>

                        Name <input disabled={this.state.disabled} value={this.state.name} onChange={(e) => this.handleName(e.target.value)} />
                        Price<input disabled={this.state.disabled}
                            value={this.state.price}
                            placeholder='0.00'
                            type='currency'
                            onChange={(e) => this.handlePrice(e.target.value)} />

                        <div className='button-container'>
                            {this.state.disabled ?
                                <button id='Button' onClick={() => this.handleEdit()}>Edit</button> :
                                <button onClick={() => this.handleSave()}>Save</button>}

                            <button id='Button'>Delete</button>
                        </div>
                        <br />
                        <div className='image'>
                            <img src={this.state.image_url} alt='product' />
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}