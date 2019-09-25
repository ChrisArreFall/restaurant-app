import React from 'react'
import '../../App.css';

const header = (props) => {
    return (
        <div className="header">
            <h1>{props.text}</h1>
        </div>
    )
};

export default header;