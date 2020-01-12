import React from 'react'
import classes from './Person.module.css'

const PersonDisplay = (props) => {

    const rnd = Math.random();

    if ( rnd > 0.5 ) {
        throw new Error('Oops, something went wrong');
    }
    
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>Mi nombre es: {props.name} y tengo {props.age} años</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default PersonDisplay;