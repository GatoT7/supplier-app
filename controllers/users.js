const bcrypt = require('bcrypt') //npm install bcrypt
const usersRouter = require('express').Router()
const { request, response } = require('express')
const User = require('../mongoose')

usersRouter.post('/', async(request, response)=>{
    const {body}= request
    const {username, name, password} = body

    const passwordHash = await bcrypt.hash(password, 10) //asincrono, hashea de poder 10
    const user = new User ({
        username,
        name,
        passwordHash
    })

    const savedUser = await user.save()
    response.json(savedUser)
})
module.exports = usersRouter