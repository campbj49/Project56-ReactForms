import { useState } from "react";
import "./ToDoList.css";
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";

/** ToDoList: displays list of created toDoes and form for the creation of new toDoes
 * 
 * State:
 * - toDoList : list of all the toDoes to be rendered
 * 
 * App --> ToDoList --> ToDo
 *          |__> NewToDoForm
 */
 function ToDoList(props) {
  const [list, setList] = useState([]);

  //function that removes the tartgeted toDo from the list
  function remove(e){
    setList(list.filter((l,i)=> e.target.id != i))
  }

  //function for the newly created toDo
  function onSubmit(evt){
    evt.preventDefault();
    let rawData = evt.target.querySelectorAll("input");
    let newToDo = {
      message:rawData[0].value
    }
    addList(newToDo);
  }
  
  //function for adding a toDo to the list
  function addList(toDo){
    console.log(toDo);
    setList([...list, toDo]);
  }
  return (
    <div className="ToDoList">
      <NewToDoForm onSubmit={onSubmit}/>
      {list.map((toDo,i) => 
        <ToDo 
        message={toDo.message}
        key={i}
        id={i}
        remove={remove}/>)}
    </div>
  );
}

export default ToDoList;
