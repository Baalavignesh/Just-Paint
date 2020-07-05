import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import './Button.css';

const MyComponent = (props) => {



    let btn = null;
    const [ value, setValue ] = useState(0); 
    if(props.name === 'Download') {
        btn = null
    } 
    else{
        btn = (
            <RangeSlider
            value={value}
            onChange={changeEvent => {setValue(changeEvent.target.value);
            }} />
        );
    }

    return (
    <div className = 'below-button'>
        <button className = 'button-style' onClick = {props.click}> {props.name}  </button>
        {btn}
    </div>
    );
}

export default MyComponent;