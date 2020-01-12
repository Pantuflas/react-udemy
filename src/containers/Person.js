//Functional imports
import React, { Component } from 'react'

//Styling imports
import PersonsList from '../components/persons/PersonsList'
import Cockpit from '../components/Cockpit/Cockpit'

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

        let persons = null;

        if (this.state.showPersons) {
            persons = <PersonsList 
                        persons={this.state.persons} 
                        clicked={this.deletePersonHandler} 
                        changed={this.nameChangedHandler}/>;
        }

        return (
            <div>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler} />
                {persons}
            </div>
        )
    } 
}

export default Person;


