import React from 'react';
import './customButton.css'
const CustomButton = (props) => (
    <div className ="customButton">
        <button onClick={props.click} id ={props.id}> {props.children}</button>
    </div>
)
export default CustomButton;