import { useState } from "react";
import "./NewToDoForm.css"
/**
 * NewToDoForm: Creates and handles the form for making a new box
 * 
 * Props: 
 * -onSubmit: function for passing the form data up to the parent
 * 
 * States:
 * -message: current value typed into the form
 * 
 * App --> ToDoList --> NewToDoForm
 */

function NewToDoForm({onSubmit}){
    //data and handlChange() modified from example
    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: ""
      });
    //keeps input val props up to date
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    return(
        <form onSubmit={onSubmit}>
            <label htmlFor="message">Message</label>
            <input required type="text" id="message" onChange={handleChange}></input><br/>
            <button>Create To Do</button>
        </form>
    )
}

export default NewToDoForm;