import React from 'react'
import './Person.css'
const PersonDisplay = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Mi nombre es: {props.name} y tengo {props.age} años</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default PersonDisplay;