import { useState } from "react";
import "./NewBoxForm.css"
/**
 * NewBoxForm: Creates and handles the form for making a new box
 * 
 * Props: 
 * -onSubmit: function for passing the form data up to the parent
 * 
 * States:
 * -height: current value typed into the form
 * -width:  "                "             "
 * -color:  "                "             "
 * 
 * App --> BoxList --> NewBoxForm
 */

function NewBoxForm({onSubmit}){
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
            <label htmlFor="height">Height</label>
            <input required type="number" id="height" onChange={handleChange}></input><br/>
            <label htmlFor="width">Width</label>
            <input required type="number"id="width" onChange={handleChange}></input><br/>
            <label htmlFor="backgroundColor">Background Color</label>
            <input required type="text" id="backgroundColor" onChange={handleChange}></input><br/>
            <button>Create Box</button>
        </form>
    )
}

export default NewBoxForm;