import React from "react";
import "./ToDo.css";

/** ToDo: displays simple ToDo shape
 * 
 * Props:
 * - text: message to be displayed
 * 
 * State:
 * - none
 * 
 * App --> Carousel --> ToDo
 */

 function ToDo({id, message,remove}) {

  return (
    <div className="ToDo">
      <button onClick={remove} id = {id}>X</button>
      <p>{message}</p>
    </div>
  );
}

export default ToDo;
