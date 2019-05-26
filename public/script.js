function getClubInfo() {
    const input = document.getElementById("clubName").value
    console.log(input)

    axios.get('/showclub/' + input) 
        .then(response => {
            document.getElementById("clubInfo").innerHTML = response.data
        })
}

function handleSubmit() {
    const username = document.getElementById("user-name").value
    const year = document.getElementById("year").value
    const carmake = document.getElementById("car-make").value
    const carmodel = document.getElementById("car-model").value
    const message = document.getElementById("message").value

    console.log(username, year, carmake, carmodel, message)

    const payload = {
        username,
        year,
        carmake,
        carmodel,
        message
    }
    axios.post('/api', payload)
        .then(response => {
            console.log(response)
            let output = JSON.stringify(response.data)
            document.getElementById('result').innerHTML = output
        })
}

function getAllMembers() {
    axios.get('/getallmembers') 
        .then(response => {
            let data = response.data
            console.log(data)
            console.log(data[0])
            for (let i = 0; i < data.length; i++) {
                let names = data[i].username
                let year = data[i].year
                let make = data[i].carmake
                let model = data[i].carmodel
                let message = data[i].message
                if (names) {
                    // document.getElementById('results').innerHTML +=  names + ' ' + year + ' ' + make + ' ' + model + ' ' + message + '\n';
                    let output = `${names} ${year} ${make} ${model} ${message} <br></br>`
                    console.log(output)
                    document.getElementById('results').innerHTML += output;
                }
            }
        })
}