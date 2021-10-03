const express = require('express') //importing express
const mongoose = require('mongoose') //importing mongoose
const app = express()



app.get('/', (req, res) => {

    res.send("visited / end point")
    console.log(req.query)
})




app.listen(4444, '127.0.0.1', (err) => {

    if (err) {
        console.log("some error occured", err)
    } else {
        console.log("server is up and running")
    }
})