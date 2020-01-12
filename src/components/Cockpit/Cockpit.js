import React from 'react'
import classes from './Cockpit.module.css'

const Cockpit = (props) => {
    const assignedClasses = []
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red
    }
    

    if ( props.persons.length <= 2) {
        assignedClasses.push(classes.red); //assignedClasses = ['red']
    }

    if ( props.persons.length <= 1) {
        assignedClasses.push(classes.bold); //assignedClasses = ['red', 'bold']
    }
    return (
        <div className={classes.Cockpit}>
            <p className={assignedClasses.join(' ')}>Assigning classnames dinamically</p>
            <button className={btnClass} onClick={props.clicked}> Mostrar personas </button>
        </div>
    )
}

export default Cockpit;