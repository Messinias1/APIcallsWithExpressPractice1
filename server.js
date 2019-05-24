const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const mongoose = require('mongoose')
const keys = require('./keys')
const Member = require('./models/Member.js')
mongoose.connect(keys.atlasPW, {
    useNewUrlParser: true
})
.then(() => console.log("Connected To Atlas"))

app.use(express.static("public"))
app.use(bodyParser.json())

app.post('/api', function(req, res) {
    // const carMake = req.body.carmake
    // const carModel = req.body.carmodel
    // const userName = req.body.username
    // const year = req.body.year
    // const message = req.body.message

    const { carmake, carmodel, username, year, message  } = req.body

    const data = {
        username,
        year,
        carmake,
        carmodel,
        message
    }
    console.log(data)

    const member = new Member(data) 
        member.save()
        .then(() => res.send(data))
        .catch(err => console.log(err))
})


app.get('/getallmembers', function(req, res) {
    Member.find({username: "Carl"}, function(err, members) {
        if (err) {
            res.send("Something went wrong retreiving all members")
        } else {
            res.send(members)
        }
    })
})

app.get('/showclub/:clubname', function(req, res) {
    const clubname = req.params.clubname
    console.log(clubname)

    res.send(clubname)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))