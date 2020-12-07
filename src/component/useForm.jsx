import { useState } from "react";

export const useForm = (inputData) => { //inputData is the props that is passed from the hooks component, object type
    const [value, setValue] = useState(inputData); //destructuring value and setValue from inputData
    return [value, (event)=>{ //return the data in a array format, or object
        setValue({
            ...value, //spread operator to save the previous value
            [event.target.name]:[event.target.value] //assign data to name based on the values input
        })
    }]
};
