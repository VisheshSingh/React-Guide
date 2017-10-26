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

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    this.setState({
      persons : [
        {name: 'Jitu', age: 20},
        {name: newName, age: 23},
        {name: 'Janardhan', age: 25}
      ]
    })
  }

  nameChangeHandler = (e) => {
    this.setState({
      persons : [
        {name: 'John', age: 20},
        {name: 'Janny', age: 23},
        {name: e.target.value, age: 25}
      ]
    })
  }
  
  render() {
    const style = {
      backgroundColor: '#fff',
      font: 'inherit',
      border: '1px solid green',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button 
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Jitendra')}
        >Switch Name
        </button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler}
        />
        <Person
          name={this.state.persons[1].name}  
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Jigglypuff')}
        >My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          change={this.nameChangeHandler}
        />
      </div>
    );
  }
}

export default App;
