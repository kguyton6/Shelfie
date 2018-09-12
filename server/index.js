require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const massive = require('massive')
const ctrl = require('./module_controller')
// const db = require('../db')

// const baseUrl = `http://localhost:4800/api/shelfie`



massive(process.env.CONNECTION_STRING).then(db => { app.set('db', db)})
.catch(err => console.log(err, 'Code Broke'))



// app.post('/api/shelfie', ctrl.create)
// app.get(`/api/shelfie`, ctrl.read)
// app.delete('/api/shelfie/:id', ctrl.delete)



const Port =  process.env.Port || 4800
app.listen(Port, () => {console.log(`I'm Listening${Port}`)})