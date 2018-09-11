require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const massive = require('massive')
const ctrl = './controller'
app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING)


massive(proccess.env.CONNECTION_STRING).then(db =>  app.set('db', db))
.catch(err => console.log(err, 'Code Broke'))




// app.get(`/api/`, ctrl.read)










const Port =  process.env.PORT || 4800


    app.listen(Port, () => {console.log(`I'm Listening${Port}`)})