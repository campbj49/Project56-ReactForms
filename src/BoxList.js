import { useState } from "react";
import "./BoxList.css";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

/** BoxList: displays list of created boxes and form for the creation of new boxes
 * 
 * State:
 * - boxList : list of all the boxes to be rendered
 * 
 * App --> BoxList --> Box
 *          |__> NewBoxForm
 */
 function BoxList(props) {
  const [list, setList] = useState([]);

  //function that removes the tartgeted box from the list
  function remove(e){
    setList(list.filter((l,i)=> e.target.id != i))
  }

  //function for the newly created box
  function onSubmit(evt){
    evt.preventDefault();
    let rawData = evt.target.querySelectorAll("input");
    let newBox = {
      height:parseInt(rawData[0].value),
      width: parseInt(rawData[1].value),
      backgroundColor: rawData[2].value
    }
    addList(newBox);
  }
  
  //function for adding a box to the list
  function addList(box){
    console.log(box);
    setList([...list, box]);
  }
  return (
    <div className="BoxList">
      <NewBoxForm onSubmit={onSubmit}/>
      {list.map((box,i) => 
        //console.log(box.heigh);
        <Box 
        height={box.height} 
        width={box.width}
        backgroundColor={box.backgroundColor}
        key={i}
        id={i}
        remove={remove}/>)}
    </div>
  );
}

export default BoxList;
