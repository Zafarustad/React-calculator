import React from 'react';
import './Control.css';

const Clearbtn = (props) =>{
    return(
            <div className="clear" onClick={props.clearInput}>
            {props.children}
            </div>
    );
}

const Backbtn = (props) => {
    return(
            <div className="back" onClick={props.undo}>{props.children}</div>
    );
}

export { Clearbtn, Backbtn };