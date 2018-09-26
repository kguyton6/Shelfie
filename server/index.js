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




app.get(`/api/shelf/:id`, ctrl.get_all)
app.get('/api/shelf/:id/bin/:bin', ctrl.get_shelf_bins)
app.delete('/api/shelf/:id/bin/:bin', ctrl.delete)
app.put('/api/shelf/:id/bin/:bin',  ctrl.update_table)






const Port =  process.env.Port || 4800
app.listen(Port, () => {console.log(`I'm Listening${Port}`)})