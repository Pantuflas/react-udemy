//Functional imports
import React, { Component } from 'react'
import PersonDisplay from './PersonDisplay'
import ErrorBoundary from './Errors/ErrorBoundary'

//Styling imports
import classes from './Person.module.css'


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
        let personsList = this.state.persons;
        let btnClass = [classes.Button];

        if (this.state.showPersons) {
            persons = (
                <div>
                    {personsList.map((person, index) => {
                        return <ErrorBoundary key={person.id}>
                            <PersonDisplay
                                    click={() => this.deletePersonHandler(index)} 
                                    name={person.name} 
                                    age={person.age} 
                                    changed={(event) => this.nameChangedHandler(event, person.id)}/>
                            </ErrorBoundary>
                    })}
                </div> 
            );

            btnClass.push(classes.Red);
        }

        const assignedClasses = []

        if (personsList.length <= 2) {
            assignedClasses.push(classes.red); //assignedClasses = ['red']
        }

        if (personsList.length <= 1) {
            assignedClasses.push(classes.bold); //assignedClasses = ['red', 'bold']
        }

        return (
            <div>
                <p className={assignedClasses.join(' ')}>Assigning classnames dinamically</p>
                <button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>
                    Mostrar personas
                </button>
                {persons}
            </div>
        )
    } 
}

export default Person;


