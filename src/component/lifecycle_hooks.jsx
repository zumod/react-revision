import { useState } from "react";
import useEffect, { useState } from "react";

const [name, setName] = useState("");

useEffect(() => {
    console.log("Running"); // ComponentDidMount lifecycle method
}, []); // [] empty array is called dependency, to stop re-rendering

useEffect(() => {
    console.log("Running"); // ComponentDidUpdate lifecycle method
}, [name]); //dependency is set to name, when name input is changed, this component will re-render

useEffect(() => {
    console.log("Running");
    return () => {
        // Called as cleanup function
        console.log("Component Unmounted"); // ComponentWillUnmount lifecycle method
    };
}, []);

// ex for toggle
<button type="button" onClick={setName(!name)}> // if name is set true in useState, then it will toggle to false
    Toggle
</button>;

useRef() // useRef is to refer a current element, <input ref={inputRef}>
// ex: const inputRef = useRef();
//  const accessRef = () => console.log(useRef.current)
// it returns a current ref object, that is logged in the above example

memo() // used to stop re-rendering same value change (Same as using Pure Component in Class components)
// ex: export defalut memo(App); where app is the component we dont want to re-render when parent updated

useCallback() // used with the meme() to further optimize the perfomance of react component
// it will stop re-rendering the same value, wrapping it with the parent method
//ex:
/* useCallback(
    () => {
        callback
    },
    [input],
) */

