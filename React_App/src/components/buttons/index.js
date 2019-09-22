import React from 'react'
import '../../App.css';

const button = (props) => {
    var visibility = "hidden"
    if(props.visibility){
        visibility = "visible"
    }
    return (
        <button className={props.css} style = {{"visibility":visibility}}>
            {props.text}
        </button>
    )
};

export default button;