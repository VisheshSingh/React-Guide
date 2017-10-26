import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
        <div>
            <input 
                className="input" 
                type="text" 
                onChange={props.changeUI} 
                value={props.currentName} />
        </div>
    )
}

export default UserInput;