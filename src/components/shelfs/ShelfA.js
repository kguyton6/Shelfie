import React, { Component } from 'react'



class ShelfA extends Component {
    constructor(props){
        super(props)

        this.state = {
            Shelf_list: [],
         
        }
    }

    // componentDidMount(){
    //     axios.get('http//localhost:4800/shelfie/shelfs?')
    // }



    render(){
        return(<div>Shelf A</div>)
    }
}

export default ShelfA