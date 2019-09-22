import React from 'react'
import '../../App.css';

const header = (props) => {
    return (
        <div className="header">
            <h1>Restaurant</h1>
            <p>{props.text}</p>
        </div>
    )
};

export default header;