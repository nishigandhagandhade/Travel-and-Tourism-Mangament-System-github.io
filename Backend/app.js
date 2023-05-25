const mongoose = require('mongoose')
const express = require('express')
const router = require('./router/ticket-router')
const user = require('./router/tourism-router')
const app  = express();
const cors = require('cors')


// middleware 
app.use(express.json())

app.use(cors())

// bookticket router 
app.use('/ticket',router)

// tourism name 
app.use('/tourism',user)



// connectivity mongoDB 
mongoose.connect('mongodb+srv://nishigandhagandhade:arun@cluster0.alvjoza.mongodb.net/newtourism?retryWrites=true&w=majority')
.then(()=>{

    console.log('connect cloud database')

})
.then(()=>{

    app.listen(5000,()=>{

        console.log(`listening http://localhost:5000`)
    })
})
.catch((e)=>{

    console.log(`error is ${e}`)
})

