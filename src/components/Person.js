import React, { Component } from 'react'
import PersonDisplay from './PersonDisplay'
import './Person.css'
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 3px solid blue;
    padding: 8px;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;
    }
`;
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
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '3px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
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

/*          style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            } */
        }

        const classes = []

        if (personsList.length <= 2) {
            classes.push('red'); //classes = ['red']
        }

        if (personsList.length <= 1) {
            classes.push('bold'); //classes = ['red', 'bold']
        }

        return (
            <div>
                <p className={classes.join(' ')}>Assigning classnames dinamically</p>
                <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
                    Mostrar personas
                </StyledButton>
                {persons}
            </div>
        )
    } 
}

export default Person;


