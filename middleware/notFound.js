const { request, response } = require("express");

module.exports = (request, response, next) => {
    response.status(404).end()
}