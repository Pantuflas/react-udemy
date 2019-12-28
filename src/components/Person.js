import React, { Component } from 'react'
import PersonDisplay from './PersonDisplay'

class Person extends Component {
    state = {
        persons: [
            {id: 1, name: 'Karen', age: 19},
            {id: 2, name: 'Pepe', age: 25},
            {id: 3, name: 'Muffin', age: 7}
        ]
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {id: 1, name: 'Karen', age: 19},
                {id: 2, name: newName, age: 25},
                {id: 3, name: 'Muffin', age: 7}
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {id: 1, name: 'Karen', age: 19},
                {id: 2, name: event.target.value, age: 25},
                {id: 3, name: 'Muffin', age: 7}
            ]
        })
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
        
        return (
            <div>
                <PersonDisplay 
                    name={this.state.persons[0].name} 
                    age={this.state.persons[0].age}
                />
                <PersonDisplay 
                    name={this.state.persons[1].name} 
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'José')}
                    changed={this.nameChangedHandler}
                />
                <PersonDisplay 
                    name={this.state.persons[2].name} 
                    age={this.state.persons[2].age}
                />
                <button style={style} onClick={this.switchNameHandler.bind(this, 'Antonio')}>Cambiar nombre</button>
            </div>
        )
    }
       
}
    


export default Person;


