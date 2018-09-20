import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../shelfs/shelf.css'
import logo from '../../components/shelfie.png'
// import Create_Bin from '../bins/Create_Bin'


class Shelf extends Component { 
    constructor(props){
        super(props)

        this.state = {
            bins: {},
            products: []

        }
        // this.componentDidMount = this.componentDidMount.bind(this)
    }
        
        componentDidMount(){
            axios.get(`http://localhost:4800/shelf/${this.props.match.params.id}`)
           .then(res => { 
                this.setState({ products: res.data })
            }).catch(err => console.log(err, 'error'))
        }




    render( ) {
        
    // let { bins } = this.state.products
    //     for(let i = 0; i < bins.length; i++){
    //         if (bins[i] === id) {
    //             this.setState({ bins: bins })
    //     }       return (<Link to='shelf/shelf=A/bin=1' value={bins[i]}><button className='shelf-button-bin' ></button></Link>)
    // }
      return (
            <div className='shelf-container'>

            <div className='shelf-header' > Shelf 
           
            <Link to='/Home' className='shelf-logo'><img id='img' src={logo} /></Link>
            </div>
           
                    <div className='bin-list'>
                        <Link to='/bin/bin=1'><button className='shelf-button-bin'>Bin 1 </button></Link>
                        <Link to='/bin/bin=2'><button className='shelf-button-bin'>Bin 2</button></Link>
                        <Link to='/bin/bin=3'><button className='shelf-button-bin'>Bin 3</button></Link>
                        <Link to='/bin/bin=4'><button className='shelf-button-bin'>Bin 4</button></Link>
                        <Link to='/bin/bin=5'><button className='shelf-add-button' >
                        + Add to Inventory</button></Link> 
                </div>
            </div>
        )
    }
}

export default Shelf