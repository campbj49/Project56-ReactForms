import React from "react";
import "./Box.css";

/** Box: displays simple box shape
 * 
 * Props:
 * - backgroundColor: background-color of the box
 * - width: width of the box in pixels
 * - height: height of the box in pixels
 * - remove: callback function for the removal of the current box
 * 
 * State:
 * - none
 * 
 * App --> Carousel --> Box
 */

 function Box({id, backgroundColor, width, height,remove}) {
  console.log(height);

  return (
    <div 
    className="Box" 
    style={{"backgroundColor":backgroundColor,
                                  "width":width,
                                  "height":height}}>
      <p onClick={remove} id = {id}>X</p>
    </div>
  );
}

export default Box;
