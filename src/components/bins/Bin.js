import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './bin.css'
import logo from './shelfie.png'
import no_image from './no_image.png'

export default class Bin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: '',
            image_url: no_image,
            disabled: true,


        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handlePrice = this.handlePrice.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleImage = this.handleImage.bind(this)

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

    handleImage(value) {
        this.setState({ image_url: value })
    }


    handleSave(name, price, image_url) {
        axios.put(`/api/shelf/${this.props.match.params.id}/bin/${this.props.match.params.bin}`, { name, price, image_url })
            .then(() => {
                this.setState({ disabled: true })
            })
    }

    handleDelete() {
        alert('this is permanent')
        this.setState({ name: '', price: '', image_url: '' })
        axios.put(`/api/shelf/${this.props.match.params.id}/bin/${this.props.match.params.bin}`, this.state.name, this.state.price, this.state.image_url)
            .then(() => this.props.history.push(`/shelf/${this.props.match.params.id}/add/${this.props.match.params.bin}`))

    }



    render() {

        return (
            <div className='bin-container'>
                <div className='bin-header'>
                    <Link to='/home' className='img-logo'> <img id='img-logo' src={logo} /></Link>
                    <Link to={`/shelf/${this.props.match.params.id}`} className='shelf-title'>
                        {`Shelf ${this.props.match.params.id}`} </Link>
                    <div className='bin-title'>{`Bin ${this.props.match.params.bin}`} </div>
                </div><br />


                <main className='bin-body'>
                    {this.state.disabled === true ?
                        <div className='input'>
                            <h1>{this.state.name}</h1>
                            <h3>{this.state.price}</h3>
                            <div className='photo'>
                                <img src={this.state.image_url} alt='product' />
                            </div>
                            <div className='buttons'>
                                <button id='edit' onClick={() => this.handleEdit()}>
                                    Edit</button>
                                <button id='delete' onClick={() => this.handleDelete(this.state.name, this.state.price, this.state.image_url)}>
                                    Delete</button>
                            </div>
                        </div> :

                        <div className='input'>
                            Product Name<input
                                value={this.state.name}
                                onChange={(e) => this.handleName(e.target.value)} />
                            Price<input disabled={this.state.disabled}
                                value={this.state.price}
                                type='currency'
                                onChange={(e) => this.handlePrice(e.target.value)} />
                            Picture
                         <input placeholder='image url' onChange={(e) => this.handleImage(e.target.value)}
                            />
                            <div className='photo'>
                                <img src={this.state.image_url} alt='product' />
                            </div>
                            <div className='buttons'>
                                <button id='save' onClick={() => this.handleSave(this.state.name, this.state.price, this.state.image_url)}>
                                    Save</button>
                            </div>
                        </div>
                    }

                    <br />

                </main>
            </div>
        )
    }
}



