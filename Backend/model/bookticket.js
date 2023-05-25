const mongoose = require('mongoose')

const bookticketSchema = mongoose.Schema({

    name: {

        type: String,
        require: true
    },
    contactNo: {

        type: Number,
        require: true
    },
    Date: {

        type: String,
        require: true
    },
    Time: {

        type: String,
        require: true
    },
    placeName: {

        type: String,
        require: true
    },
    seat: {

        type: Number,
        require: true
    },
    available: {

        type: Boolean,
        require: true
    }

})

module.exports = mongoose.model('tourismsystem', bookticketSchema)