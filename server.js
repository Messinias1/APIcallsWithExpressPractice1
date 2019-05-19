const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(express.static("public"))
app.use(bodyParser.json())

let data = [];
app.post('/api', function(req, res) {
    const carMake = req.body.carmake
    const carModel = req.body.carmodel
    const userName = req.body.username
    const year = req.body.year
    const message = req.body.message

    const temp = {
        username: userName,
        year,
        carmake: carMake,
        carmodel: carModel,
        message
    }

    data.push(temp)
    console.log(data)
    // console.log(carMake, carModel, color)
    const reply = `Congrats ${userName}, owner of a ${year} ${carMake} ${carModel}, you are now a member! .. Saying \'${message}\' to all current members!`
    res.send(reply)
})

app.get('/getallmembers', function(req, res) {
    res.send(data)
})

app.get('/showclub/:clubname', function(req, res) {
    const clubname = req.params.clubname
    console.log(clubname)

    res.send(clubname)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))