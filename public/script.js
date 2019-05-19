function getClubInfo() {
    const input = document.getElementById("clubName").value
    console.log(input)

    axios.get('/showclub/' + input) 
        .then(response => {
            document.getElementById("clubInfo").innerHTML = response.data
        })
}

function handleSubmit() {
    const userName = document.getElementById("user-name").value
    const year = document.getElementById("year").value
    const carMake = document.getElementById("car-make").value
    const carModel = document.getElementById("car-model").value
    const message = document.getElementById("message").value

    console.log(userName, year, carMake, carModel, message)

    const payload = {
        username: userName,
        year,
        carmake: carMake,
        carmodel: carModel,
        message
    }
    axios.post('/api', payload)
        .then(response => {
            console.log(response)
        })
}

function getAllMembers() {
    axios.get('/getallmembers') 
        .then(response => {
            document.getElementById('result').innerHTML = JSON.stringify(response.data)
        })
}