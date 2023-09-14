import "./App.css";
import BoxList from "./BoxList";
import photos from "./photos.js";

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
      <BoxList/>
    </div>
  );
}

export default App;
