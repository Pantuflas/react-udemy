import React from 'react'

const ValidationComponent = (props) => {

    let textValidationMessage = 'Text too short';
    let text = props.inputLength;

    if(text >= 5) 
        textValidationMessage = 'Text long enough';

    return (
        <div>
            <p>{textValidationMessage}</p>
        </div>
    );
}

export default ValidationComponent;