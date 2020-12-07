import React from "react";
import FunctionCounter from "./FunctionCounter";
import { useForm } from "./useForm";

const Hooks = () => {
    const [data, setData] = useForm({
        name: "",
        email: "",
    });
    const onClickHandle = () => {
        console.log(data.name, data.email);
    };
    console.log('parent');
    return (
        <div>
            <h1>Hooks Component</h1>
            <input
                type="text"
                name="name"
                value={data.name}
                onChange={setData}
            />
            <input
                type="text"
                name="email"
                value={data.email}
                onChange={setData}
            />
            <button type="button" onClick={onClickHandle}>
                Submit
            </button>
            <FunctionCounter />
        </div>
    );
};

export default Hooks;
