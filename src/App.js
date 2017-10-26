import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <Person name="John" age="20" />
        <Person name="Jaany" age="23">My Hobbies: Racing</Person>
        <Person name="Janardhan" age="25"/>
      </div>
    );
  }
}

export default App;
