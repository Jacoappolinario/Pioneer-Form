const express = require('express')
const routes = express.Router()
const pioneer = require('./app/controllers/pioneers')

routes.get('/', function(req, res) {
    return res.redirect("/pioneer")
})
routes.get('/pioneer', pioneer.create)
routes.post('/pioneer', pioneer.post)

module.exports = routes