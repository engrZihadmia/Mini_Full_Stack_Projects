let Router = require('express').Router()

let {getContactControllers,addContactController,deleteContactController, updateContactController} = require("../controller/getContactController")


Router.get('/contacts', getContactControllers)
Router.post('/contacts', addContactController)
Router.get('/contacts/delete/:id', deleteContactController)
Router.put('/contacts/:id', updateContactController)

module.exports= Router;