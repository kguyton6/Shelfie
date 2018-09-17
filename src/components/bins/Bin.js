import React, { Component } from 'react'



export default class Bin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            props: []
        }

    }
    render() {


        return (

            <div className='bin'>
              Name  <input />
              Price  <input />
            <div className='binButton'>
                <button>Edit</button>
                <button>Delete</button>
           </div>
           </div>
        )
    }
}