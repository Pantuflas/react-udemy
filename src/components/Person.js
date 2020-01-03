import React, { Component } from 'react'
import PersonDisplay from './PersonDisplay'

class Person extends Component {
    state = {
        persons: [
            { id: 2, name: 'Pepe', age: 25  },
            { id: 1, name: 'Karen', age: 19 },
            { id: 3, name: 'Muffin', age: 7 }
        ],
        showPersons: false
    }

    nameChangedHandler = ( event, id ) => {
        const personIndex = this.state.persons.findIndex(personToFind => {
            return personToFind.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons});
    }

    render() {
        const style = {
            backgroundColor: 'blue',
            font: 'inherit',
            border: '3px solid blue',
            padding: '8px',
            color: 'white',
            cursor: 'pointer'
        };
        
        let persons = null;
        let personsList = this.state.persons;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {personsList.map((person, index) => {
                        return <PersonDisplay
                                    click={() => this.deletePersonHandler(index)} 
                                    name={person.name} 
                                    age={person.age} 
                                    key={person.id}
                                    changed={(event) => this.nameChangedHandler(event, person.id)}
                                />
                    })}
                </div> 
            );
        }
        return (
            <div>
                <button style={style} onClick={this.togglePersonsHandler}>Mostrar personas</button>
                {persons}
            </div>
        )
    } 
}

export default Person;


