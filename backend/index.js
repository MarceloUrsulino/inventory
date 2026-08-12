const express = require('express')
require('dotenv').config()
const db = require('./db/conn')
const models = require('./models/associations')

const app = express()

app.use(express.json())





db.sync().then(() =>{
   
    console.log('Conectou com o banco.')
    app.listen(3000)

}).catch(err =>{

    console.log(err)
})






