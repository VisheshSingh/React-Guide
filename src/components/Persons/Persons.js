import React from 'react';
import Person from './Person/Person';

const Persons = (props) => ( props.persons.map((person, index) => {
    return <Person 
      name={person.name} 
      age={person.age} 
      click={props.delete.bind(this, index)}
      key={person.id}
      change={props.change.bind(this, person.id)} />
  })
);

export default Persons;