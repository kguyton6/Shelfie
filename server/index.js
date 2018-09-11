require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const ctrl = './controller'
app.use(bodyParser.json())
const massive = require('massive')




massive(process.env.CONNECTION_STRING).then(db => { app.set('db', db)})
.catch(err => console.log(err, 'Code Broke'))



app.post('/api/shelfie', ctrl.create)
app.get(`/api/shelfie`, ctrl.read)
app.put('/api/shelfie/:id/desc=', ctrl.put)











const Port =  process.env.Port || 4800


    app.listen(Port, () => {console.log(`I'm Listening${Port}`)})