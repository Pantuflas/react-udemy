import React from 'react'
import PersonDisplay from './PersonDisplay';

const PersonsList = (props) => props.persons.map((person, index) => {
        return <PersonDisplay
                    click={() => props.clicked(index)} 
                    name={person.name} 
                    age={person.age} 
                    key={person.id}
                    changed={(event) => props.changed(event, person.id)} />
    } );

export default PersonsList;