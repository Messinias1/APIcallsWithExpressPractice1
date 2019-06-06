import React, { Component } from 'react';

class App extends Component {

  state = {
    clubName: ''
  }

  getClubInfo = () => {
    console.log("button clicked", this.state)
  }

  handleSubmit = () => {
    console.log("button clicked")
  }

  getAllMembers = () => {
    console.log("button clicked")
  }
  render() {
    return(
    <div style={{margin: '10px', textAlign: 'center'}} className="App">
    <h1>Euro Cars of Rhode Island</h1>
    <input onChange={e => this.setState({clubName: e.target.value})} type="text" id="clubName" placeholder="Enter Clubname Here.." />
    <button onClick={this.getClubInfo}>Get Club Info</button>
    <p id="clubInfo"></p>

    <h2>Member Registration</h2>
    <input type="text" id="user-name" placeholder="Enter Username" />
    <input type="number" id="year" placeholder="Enter Vehicle Year" />
    <input type="text" id="car-make" placeholder="Enter Vehicle Make" />
    <input type="text/number" id="car-model" placeholder="Enter Vehicle Model" />
    <input type="text" id="message" placeholder="Enter Message to other members" />
    <button onClick={this.handleSubmit}>Submit</button>
    <p id='result'></p>

    <h3>Aquire All Member Info</h3>
    <button onClick={this.getAllMembers}>Get</button>
    <p id="results"></p>
    </div>
    )
  }
}

export default App;
