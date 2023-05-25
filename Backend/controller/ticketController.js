const bookticket = require('../model/bookticket')


// addticket 
const addticket = async (req, res, next) => {

    let booktickets;

    try {

        booktickets = new bookticket(req.body)
        await booktickets.save()
    }
    catch (e) {

        console.log(e)
    }

    if (!booktickets) {

        return res.status(500).json({ message: 'cant not create' })
    }
    else {

        res.status(201).json({ booktickets })
    }
}

// getticket 
const getticket = async (req, res, next) => {

    let booktickets;

    try {

        booktickets = await bookticket.find()
    }
    catch (e) {

        console.log(e)
    }

    if (!booktickets) {

        return res.status(404).json({ message: ' data not found' })
    }
    else {

        return res.status(200).json(booktickets)
    }
}

// getticketByid
const getticketById = async (req, res, next) => {

    const _id = req.params.id;

    let booktickets;

    try {

        booktickets = await bookticket.findById({ _id })
    }
    catch (e) {

        console.log(e)
    }

    if (!booktickets) {

        res.status(404).json({ message: 'not found' })
    }
    else {

        res.status(200).json(booktickets)
    }
}

// updateticket 
const updateticket = async (req, res, next) => {

    const _id = req.params.id;

    const { name, contactNo, Date, Time, placeName, seat, Tourismname, rating, perperson, image, available } = req.body

    let booktickets;

    try {

        booktickets = await bookticket.findByIdAndUpdate(_id, {

            name,
            contactNo,
            Date,
            Time,
            placeName,
            seat,
            Tourismname,
            rating,
            perperson,
            image,
            available
        })

        booktickets = await booktickets.save()

    }
    catch (e) {

        console.log(e)
    }

    if (!booktickets) {

        res.status(501).json({ message: 'not update' })
    }
    else {

        res.status(201).json(booktickets)
    }
}

// deleteticket 
const deleteticket = async (req, res, next) => {

    let booktickets;
    const _id = req.params.id;

    try {

        booktickets = await bookticket.findByIdAndDelete(_id)
    }
    catch (e) {

        console.log(e)
    }

    if (!booktickets) {

        res.status(404).json({ message: 'data not found' })
    }
    else {

        res.status(201).json(booktickets)
    }
}


// bookticket all controller 
exports.addticket = addticket;
exports.getticket = getticket;
exports.getticketById = getticketById;
exports.updateticket = updateticket;
exports.deleteticket = deleteticket;



