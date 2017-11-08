import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'qwe1', name: 'John', age: 20 },
      { id: 'asdasd3', name: 'Janny', age: 23 },
      { id: 'ACDF2', name: 'Janardhan', age: 25 }
    ],
    username: 'Harvey Spectre',
    showPersons: false
  }

  nameChangeHandler = (id, e) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = e.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons : persons
    })
  }

  deleteUserHandler = (personIndex) => {
    //const persons = [...this.state.persons];
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  toggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  
  render() {

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            delete={this.deleteUserHandler}
            change={this.nameChangeHandler}/>
        </div>
      );
    }

    return (
      <StyleRoot>
        <div className="App">
          <Cockpit 
            clicked={this.toggleHandler}
            persons={this.state.persons}/>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
