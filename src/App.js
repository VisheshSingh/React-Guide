import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

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

  // switchNameHandler = (newName) => {
  //   //console.log('Was clicked!');
  //   this.setState({
  //     persons : [
  //       {name: 'Jitu', age: 20},
  //       {name: newName, age: 23},
  //       {name: 'Janardhan', age: 25}
  //     ]
  //   })
  // }

  nameChangeHandler = (e, id) => {
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

  changeUserOutputHandler = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  toggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  
  render() {
    const style = {
      backgroundColor: '#fff',
      font: 'inherit',
      border: '1px solid green',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
                name={person.name} 
                age={person.age} 
                click={this.deleteUserHandler.bind(this, index)}
                key={person.id}
                change={(e) => this.nameChangeHandler(e, person.id)} />
            })
          }

          {/* <Person 
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
          /> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button 
          style={style}
          onClick={this.toggleHandler}
        >Toggle Persons
        </button>
        {persons}

        {/* <UserInput changeUI={this.changeUserOutputHandler.bind(this)} currentName={this.state.username}/>
        <UserOutput username="Anthony Gonsalvis"/>
        <UserOutput username={this.state.username}/> */}
      </div>
    );
  }
}

export default App;
