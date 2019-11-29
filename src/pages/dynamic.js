import React from "react";
import '../App.scss'
function dynamic(props) {
    console.log(props);
    
    return (
        <div className="dynamic-main">
            <div className='dynamic-main-left'>{props.name}</div>
            <div className='dynamic-main-right'>{props.path}</div>
        </div>
    );
}

export default dynamic;
