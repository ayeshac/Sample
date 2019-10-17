import React from "react";

const DisplayList = (props) => {
    return(
        <div className="container">
            <ul>
                     {props.arr.map((x,i=0) => 
                    <div className="wrapper">
                        <div className="new">
                            <li className="e">{x}</li>
                         </div>
                         <div className="new" >
                            <button className="e" onClick={props.changed(i)}>Remove</button>
                         </div>      
                    </div>
                   
                    )}
            
            </ul>
        
        </div>
    );
}

export default DisplayList;