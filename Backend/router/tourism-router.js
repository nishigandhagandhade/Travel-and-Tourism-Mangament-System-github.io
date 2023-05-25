const express = require('express')

const Tourismname = require('../model/Tourismname')

const user = express.Router();
const TourismController = require('../controller/tourismController')



// Tourismname  
user.post('/',TourismController.addtourism)

user.get('/',TourismController.gettourismdata)

user.get('/:id',TourismController.gettourismdataById)

user.put('/:id',TourismController.upadatetourism)

user.delete('/:id',TourismController.deletetourism)

module.exports = user