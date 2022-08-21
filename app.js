require('dotenv').config() // npm install dotenv --save
require('./mongoose.js')
const { request, response } = require('express')
const express = require('express')
const app = express() //npm install express --save
//npm install mongoose
//nodemon:  npm install --save-dev nodemon
//eslint standar:  npm install standard --save-dev
const cors = require('cors')//npm install cors -E es una dep de produccion no de desarrollo

app.use(cors()) //permite que todos se puedan conectar al back

app.get('/', (request,response) => {

})

const PORT = process.env.PORT
const server = app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})