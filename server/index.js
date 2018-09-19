require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const massive = require('massive')
const ctrl = require('./shelfie_controller')
const cors = require('cors')



app.use(cors())

massive(process.env.CONNECTION_STRING).then(dbInstance => { app.set('db', dbInstance)})
.catch(err => console.log(err, 'Code Broke'))




// app.get(`/home`, ctrl.read_inventory)
// app.get(`/shelf/:id`, ctrl.read_inventory)
app.get('/shelf/:id', ctrl.read_inventory)
// app.get(`/bin/:id`, ctrl.get_one)
app.post(`/bin/:id`, ctrl.add_inventory)






const Port =  process.env.Port || 4800
app.listen(Port, () => {console.log(`I'm Listening${Port}`)})