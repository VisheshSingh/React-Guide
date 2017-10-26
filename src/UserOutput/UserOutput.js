import React from 'react';
import './UserOutput.css';
const UserOutput = (props) => {
    return (
        <div className="UserOP">
            <p>My name is: {props.username}</p>
            <p>I am the second paragraph</p>
        </div>
    )
}

export default UserOutput;