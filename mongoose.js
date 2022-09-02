const mongoose = require('mongoose')
const connectionString = process.env.MONGO_DB_URI
const { model, Schema } = mongoose

//Conexion a Mongo
mongoose.connect(connectionString).then(() => { //devuelve una promesa entonces uso el then
      console.log('Database connected')
    }).catch(err => {
      console.error(err)
    })

//Schema
const supplierSchema = new Schema ({
  logo: String,
  name: { type: String, requiered: true }, //si o si se necesita el nombre
  description: String,
  file: { type: String, requiered: true },
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
}, {timestamps: true})//saber el tiempo en el que se actualizo 
//Si quiero convertir un supplier a JSON va a pasar lo siguiente
supplierSchema.set ('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.createdAt
    delete returnedObject.updatedAt
    //delete returnedObject.id
  }
})
//Creamos el modelo con nombre en singular
const Supplier = model('Supplier', supplierSchema)
module.exports = Supplier

//Creo el schema y model de los users
// const userSchema = new Schema ({
//   username: { type: String, requiered: true },
//   name: String,
//   passwordHash: { type: String, requiered: true },
//   supplier: [{
//     type: Schema.Types.ObjectId,
//     ref: 'Supplier',
//   }],
// }, {timestamps: true})
// userSchema.set ('toJSON', {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id
//     delete returnedObject._id
//     delete returnedObject.__v
//     delete returnedObject.passwordHash
//     delete returnedObject.createdAt
//     delete returnedObject.updatedAt
//   }
// })
// const User = model('User', userSchema)
// module.exports = User