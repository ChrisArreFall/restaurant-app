import React from 'react'
import '../../App.css';

const menuItem = (props) => {
    return (
        <div className="item-box">
            <input className = "check-box" type="checkbox" name={props.name} value={props.value}/>
            <label className = "label-nombre"> {props.text} </label>
            <label className = "label-precio"> ₡{props.precio} </label>
        </div>
    )
};

export default menuItem;

