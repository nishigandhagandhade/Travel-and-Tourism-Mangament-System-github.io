const mongoose = require('mongoose')

const TourismnameSchema = mongoose.Schema({
    Tourismnames: {
        type: String,
        require: true
    },
    rating: {

        type: String,
        require: true
    },
    perperson: {

        type: String,
        require: true
    },
    image: {

        type: String,
        require: true
    },
    available: {

        type: Boolean,
        require: true
    }
})

module.exports = mongoose.model('Tourismdata',TourismnameSchema)