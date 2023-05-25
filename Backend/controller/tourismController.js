const Tourismname = require('../model/Tourismname')


// addtourism 
const addtourism = async (req, res, next) => {

    let tourism;

    try {

        tourism = new Tourismname(req.body)
        await tourism.save()
    }
    catch (e) {

        console.log(e)
    }

    if (!tourism) {

        return res.status(500).json({ message: 'cant not create' })
    }
    else {

        res.status(201).json({ tourism })
    }
}

// gettourismdata 
const gettourismdata = async (req, res, next) => {

    let tourism;

    try {

        tourism = await Tourismname.find()

    }
    catch (e) {

        console.log(e)
    }

    if (!tourism) {

        res.status(500).json({ message: 'data is get' })
    }
    else {

        res.status(201).json({ tourism })
    }
}


const gettourismdataById = async (req, res, next) => {


    const _id = req.params.id;

    let tourism;

    try {

        tourism = await Tourismname.findById({ _id })
    }
    catch (e) {

        console.log(e)
    }

    if (!tourism) {

        res.status(404).json({ message: 'not found' })
    }
    else {

        res.status(200).json(tourism)
    }
}

// upadatetourism 
const upadatetourism = async (req, res, next) => {

    const _id = req.params.id;

    const { Tourismnames, rating, perperson, image, available } = req.body

    let tourism;

    try {

        tourism = await Tourismname.findByIdAndUpdate(_id, {
            Tourismnames,
            rating,
            perperson,
            image,
            available
        })

        tourism = await tourism.save()

    }
    catch (e) {

        console.log(e)
    }

    if (!tourism) {

        res.status(501).json({ message: 'not update' })
    }
    else {

        res.status(201).json(tourism)
    }
}

// detete tourism 
const deletetourism = async (req, res, next) => {

    let tourism;
    const _id = req.params.id;

    try {

        tourism = await Tourismname.findByIdAndDelete(_id)
    }
    catch (e) {

        console.log(e)
    }

    if (!tourism) {

        res.status(404).json({ message: 'data not found' })
    }
    else {

        res.status(201).json(tourism)
    }
}



// tourism all controller
exports.addtourism = addtourism;
exports.gettourismdata = gettourismdata;
exports.gettourismdataById = gettourismdataById;
exports.upadatetourism = upadatetourism;
exports.deletetourism = deletetourism;
