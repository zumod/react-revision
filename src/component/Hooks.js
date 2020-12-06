import React from "react";
import { useForm } from "./useForm";

const Hooks = () => {
    const [data, setData] = useForm({
        name: "",
        email: "",
    });
    console.log(data.name, data.email);
    return (
        <div>
            <h1>Welcome</h1>
            <form action="" autoComplete="off">
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
            </form>
            <button
                type="button"
                onClick={() => console.log(data.name, data.email)}
            >
                Submit
            </button>
        </div>
    );
};

export default Hooks;
