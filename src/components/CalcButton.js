import React from 'react';

function CalcButton(props) {
    return (
        <div>
            <button className={props.className} onClick={() => props.onClick(props.value)} >{props.value}</button>
        </div>
    );
}

export default CalcButton;