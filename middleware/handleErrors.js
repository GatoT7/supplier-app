const { request, response } = require("express");

module.exports = (error, request, response, next) => { //Middleware para controlar los errores
    console.error(error)
    error.name === 'CastError' ? response.status(400).end(): 
    response.status(500).end()
}