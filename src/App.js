import "./App.css";
import BoxList from "./BoxList";
import ToDoList from "./ToDoList";

/** App component, renders BoxList
 * 
 * Props: none
 * State: none
 * 
 * App --> BoxList
 */

function App() {

  return (
    <div className="App">
      {/* <BoxList/> */}
      <ToDoList/>
    </div>
  );
}

export default App;
