import React, { Component } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'


export default class Bin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bins: []
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }
    componentDidMount(){
        axios.get(`http://localhost:4800/shelf/${this.props.match.params.id.id}`).then(res => { 
            this.setState({ bins: res.data })
            console.log(res.data)
        }).catch(err => console.log(err, 'error'))
    }
    
    render() {
        // const bins = this.state.bins.map((bin, id) => {
        //     <Link to={`/bin/${bin.id}`} key={id}> <h3>{bin.id}</h3></Link> 
        //  })
        return (
            <div className='bin'>
                Name  <input />
                Price  <input />
                <div className='binButton'>
                    <button>Edit</button>
                    <button>Delete</button>
                   {/* <h3>{this.props.match.params.bin}</h3> 
                    {bins} */}
                </div>
            </div>
        )
    }
}