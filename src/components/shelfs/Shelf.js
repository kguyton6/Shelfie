
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../shelfs/shelf.css'
import logo from '../../components/shelfie.png'



class Shelf extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],

        }


        this.componentDidMount = this.componentDidMount.bind(this)

    }







    componentDidMount() {
        axios.get(`api/shelf/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ products: res.data })

            }).catch(err => console.log(err, 'error'))

    }




    render() {
        console.log(this.state.products)


        return (
            <div className='shelf'>
                <div className='shelf-header'>
                    <Link to='/home' className='shelf-logo'><img className='logo1' src={logo} /></Link>
                 <span className='shelf-title'>{`Shelf ${this.props.match.params.id}`}</span>

                </div>
                <div className='shelf-container'>


                    {this.state.products.length ?
                        <div className='bin-list'>
                            {this.state.products[0].name ?
                                <Link to={`/shelf/${this.props.match.params.id}/bin/1`}>
                                    <button className='shelf-button-bin'> Bin 1</button></Link>
                                : <Link to={`/shelf/${this.props.match.params.id}/add/1`}><button className='shelf-add-button' >
                                    + Add to Inventory</button></Link>}


                            {this.state.products[1].name ?
                                <Link to={`/shelf/${this.props.match.params.id}/bin/2`}>
                                    <button className='shelf-button-bin'>Bin 2</button></Link> :
                                <Link to={`/shelf/${this.props.match.params.id}/add/2`}><button className='shelf-add-button' >
                                    + Add to Inventory</button></Link>}


                            {this.state.products[2].name ?
                                <Link to={`/shelf/${this.props.match.params.id}/bin/3`}>
                                    <button className='shelf-button-bin'>Bin 3</button></Link> :
                                <Link to={`/shelf/${this.props.match.params.id}/add/3`}><button className='shelf-add-button' >
                                    + Add to Inventory</button></Link>}


                            {this.state.products[3].name ?
                                <Link to={`/shelf/${this.props.match.params.id}/bin/4`}>
                                    <button className='shelf-button-bin'>Bin 4</button></Link> :
                                <Link to={`/shelf/${this.props.match.params.id}/add/4`}><button className='shelf-add-button' >
                                    + Add to Inventory</button></Link>}


                            {this.state.products[4].name ?
                                <Link to={`/shelf/${this.props.match.params.id}/bin/5`}>
                                    <button className='shelf-button-bin'>Bin 5</button></Link> :
                                <Link to={`/shelf/${this.props.match.params.id}/add/5`}><button className='shelf-add-button' >
                                    + Add to Inventory</button></Link>}
                        </div>
                        : null}
                </div>
            </div>
        )
    }
}

export default Shelf