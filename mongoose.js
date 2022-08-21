const mongoose = require('mongoose')
const connectionString = process.env.MONGO_DB_URI

//Conexion a Mongo
mongoose.connect(connectionString).then(() => { //devuelve una promesa entonces uso el then
      console.log('Database connected')
    }).catch(err => {
      console.error(err)
    })

