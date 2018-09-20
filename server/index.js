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




app.get(`/shelf/:id`, ctrl.get_all)
// app.get('/shelf/:id/bin/:id', ctrl.get_shelf_bins)
// app.post(`/shelf/:id/bin/:id`, ctrl.post_create)
// app.put('/shelf/:id/bin/:id', ctrl.put_shelfs)





const Port =  process.env.Port || 4800
app.listen(Port, () => {console.log(`I'm Listening${Port}`)})