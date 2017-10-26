import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'John', age: 20},
      {name: 'Janny', age: 23},
      {name: 'Janardhan', age: 25}
    ]
  }

  switchNameHandler = () => {
    //console.log('Was clicked!');
    this.setState({
      persons : [
        {name: 'Jitu', age: 20},
        {name: 'Janny', age: 23},
        {name: 'Janardhan', age: 25}
      ]
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}  />
        <Person name={this.state.persons[1].name}  age={this.state.persons[1].age} >My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name}  age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
