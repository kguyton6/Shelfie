require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const massive = require('massive')
const ctrl = require('./controller')




massive(process.env.CONNECTION_STRING).then(db => { app.set('db', db)})
.catch(err => console.log(err, 'Code Broke'))




app.post('/api/shelfie', ctrl.create)
app.get('/api/shelfies', ctrl.getAll)
app.get('/api/shelfie/:id', ctrl.getOne)
app.put('/api/shelfie/:id/desc=', ctrl.update)
// app.delete('/api/shelfie/:id', ctrl.delete)



const Port =  process.env.Port || 4800
app.listen(Port, () => {console.log(`I'm Listening${Port}`)})