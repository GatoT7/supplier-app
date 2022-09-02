const suppliersRouter = require('express').Router()
const { request, response } = require('express')
const Supplier = require('../mongoose')

suppliersRouter.get('/', (request, response)=>{
    Supplier.find({}).then(suppliers => {
        response.json(suppliers)
    })
})

suppliersRouter.get('/:id', (request, response, next)=>{
    const { id }= request.params
    Supplier.findById(id).then(supplier => {
        supplier ? response.json(supplier) : response.status(404).end()
    }).catch(err=>{
        next(err)
    })
})

suppliersRouter.delete('/:id', (request, response, next)=>{
    const { id }= request.params
    Supplier.findByIdAndDelete(id).then(supplier => {
        response.status(204).end()
    }).catch(err=>{
        next(err)
    })
})

suppliersRouter.put('/:id', (request, response, next)=>{
    const { id }= request.params
    const supplier = request.body
    const newSupplierInfo = {
        logo: supplier.logo,
        name: supplier.name,
        description: supplier.description,
        file: supplier.file
    }
    Supplier.findByIdAndUpdate(id, newSupplierInfo, {new: true}).then(supplier => {
        response.json(supplier)
    }).catch(err=>{
        next(err)
    })
})


suppliersRouter.post('/', (request, response)=>{
    const supplier = request.body

    const newSupplier = new Supplier({
        logo: supplier.logo,
        name: supplier.name,
        description: supplier.description,
        file: supplier.file
    })
    newSupplier.save().then(savedSupplier =>{
        response.json(savedSupplier)
    })
})
module.exports = suppliersRouter