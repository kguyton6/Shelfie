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
            .then(() => {
                this.setState({ disabled: false, image_url: no_image })

            })

    }

    handleCancel() {
        this.props.history.push(`/shelf/${this.props.match.params.id}`)
    }

    render() {

        return (
            <div className='bin-container'>
                <div className='bin-header'>
                    <Link to='/home' className='link'> <img className='bin-logo' src={logo} /></Link>
                    <Link to={`/shelf/${this.props.match.params.id}`} className='shelf-title'>
                        {`Shelf ${this.props.match.params.id}`} </Link>
                    <div className='bin-title'>{`Bin ${this.props.match.params.bin}`} </div>
                </div>


                <main className='main-container'>
                    {this.state.disabled === true ?
                        <div className='container1'>
                            <h3 className='title'>{this.state.name}</h3>
                            <div className='photo'>
                                <img src={this.state.image_url} alt='product' className='url-disabled' /><br />
                                <div className='price'>
                                    {`Price: $${this.state.price}`} </div>
                            </div>
                            <br />
                            <div className='buttons'>
                                <button className='edit' onClick={() => this.handleEdit()}>
                                    Edit</button>
                                <button className='delete' onClick={() => this.handleDelete(this.state.image_url)}>
                                    Delete</button>
                            </div>
                        </div> :


                        <div className='container2'>
                            <span className='pic-title'>{this.state.name}</span>
                            <div className='bin-inputs'>
                                <div className='input-container'>
                                    <input placeholder='Title' className='product-name'
                                        value={this.state.name}
                                        onChange={(e) => this.handleName(e.target.value)} />
                                    <span className='dollar'>$  </span>
                                    <input className='currency' disabled={this.state.disabled}
                                        value={this.state.price}
                                        placeholder='0.00'
                                        onChange={(e) => this.handlePrice(e.target.value)} />

                                    <input placeholder='image url' onChange={(e) => this.handleImage(e.target.value)}
                                    />
                                </div>
                                <div className='buttons1'>
                                    <button className='save' onClick={() => this.handleSave(this.state.name, this.state.price, this.state.image_url)}>
                                        Save</button>
                                    <button className='delete' onClick={() => this.handleCancel()}>
                                        Cancel</button>
                                </div>
                            </div>
                            <div className='img-container'>
                                <img src={this.state.image_url} alt='product' className='url' />
                            </div>

                        </div>
                    }

                </main>
            </div>
        )
    }
}



