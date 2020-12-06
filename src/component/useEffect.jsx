import { useState } from "react";
import useEffect, { useState } from "react";

const [name, setName] = useState("");

useEffect(() => {
    console.log("Running"); // ComponentDidMount lifecycle method
}, []); // [] empty array is called dependency

useEffect(() => {
    console.log("Running"); // ComponentDidUpdate lifecycle method
}, [name]);

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
