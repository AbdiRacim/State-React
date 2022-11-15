import React from "react";

export default function Buttons(props) {
    const StartButton = (
        <button className="btn btn-one btn-start"
            onClick={props.handleStart}>
        Start and reveal
        </button>
    );
    const ActiveButtons = (
        <div className="btn-grp">
        <button className="btn btn-two" 
            onClick={props.handleReset}>
            Reset
        </button>
        <button className="btn btn-one" 
            onClick={props.handlePauseResume}>
            {props.isPaused ? "Resume" : "Pause"}
        </button>
        </div>
    );
    
    return (
        <div className="Control-Buttons">
        <div>{props.active ? ActiveButtons : StartButton}</div>
        </div>
    );
}