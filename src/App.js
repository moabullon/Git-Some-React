import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor () {
  super ()
  this.state = {
    login:"",
    avatar:"",
    url:"",
    location: ""
  }
}

  componentDidMount (){
    axios.get('https://api.github.com/users/moabullon').then(response => this.setState ({
      login: response.data.login,
      avatar: response.data.avatar_url,
      url: response.data.html_url,
      location: response.data.location

    }))



  }

  displaySearch (){
    let inputUserName = this.userInput.value
    axios.get(`https://api.github.com/users/${inputUserName}`).then(response => this.setState({
      login: this.userInput.value,
      avatar: response.data.avatar_url,
      url: response.data.html_url,
      location: response.data.location,
      blog: response.data.blog
    }))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>GitHub Profile</h2>
        </div>
        <div className="Bottom-part">
        <div className="Profiles-body">
        <img className="Profile-pic" src={this.state.avatar}/>
        <span className="Username">
          <a href={this.state.url}>{this.state.login}</a>
          </span>
          <span className="City-location">{this.state.location}</span>
          <span className="Blog-name"><a href={this.state.blog}>{this.state.blog}</a></span>
          </div>
          <div className="search-area">
          <h3>Search for other users</h3>
          <input ref={(input) => { this.userInput = input }} />
          <button onClick={this.displaySearch.bind(this)}>Search</button>
          </div>
          <div className="Other-team-members">
          <p>Other Team Members</p>
          <ul>
          <li>Name 1</li>
          <li>Name 2</li>
          <li>Name 3</li>
          <li>Name 4</li>
          </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
