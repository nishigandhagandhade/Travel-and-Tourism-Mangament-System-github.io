const express = require('express')
// bookticke coolection import 
const bookticket = require('../model/bookticket')

const router = express.Router();
const ticketController = require('../controller/ticketController')


// bookticket all router 
router.post('/',ticketController.addticket)

router.get('/',ticketController.getticket)

router.get('/:id',ticketController.getticketById)

router.put('/:id',ticketController.updateticket)

router.delete('/:id',ticketController.deleteticket)



module.exports = router;