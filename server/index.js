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



// app.post(`/api/shelfie`, ctrl.add_inventory)
app.get(`/shelf/:id`, ctrl.read_inventory)
app.get(`/shelf/`)
app.post(`/shelf/:id`)


// app.delete('/api/shelfie/:id', ctrl.delete)



const Port =  process.env.Port || 4800
app.listen(Port, () => {console.log(`I'm Listening${Port}`)})