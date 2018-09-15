import React from 'react'
import {Route, Switch} from 'react-router-dom'
import App from './App'
import ShelfA from './components/shelfs/ShelfA'
import Bin from './components/bins/Bin'
import ShelfB from './components/shelfs/ShelfB'


export default (
    <Switch>
        <Route component={App} exact path='/shelfie'/>
        <Route component={ShelfA} path='/shelfie/:shelf'/>
        <Route component={ShelfB} path='/shelfie/:shelfB/'/>
        <Route component={Bin} exact path='/bin/:id'/>
     </Switch>
)