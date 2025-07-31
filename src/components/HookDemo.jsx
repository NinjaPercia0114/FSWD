import React from "react";
function HookDemo() {
    const [counter,setCounter] = React.useState(0);
    const [msg,setMessage] = React.useState("");

    const incrementData = () => {
        if (counter > 5) {
            setMessage("Counter cannot be greater than 5");
        } else {
            setCounter(counter + 1);
            setMessage("");
        }
    }
    const decrementData = () => {
        if (counter < 1) {
            setMessage("Counter cannot be less than 1");
        } else {
            setCounter(counter - 1);
            setMessage("");
        }
    }
    return (
        <>
        <h1>
            Welcome to Hook Demo
        </h1>
        <h2>Counter value is {counter}</h2>
        <input type="button" value="+" onClick={incrementData}/>
        <p>{msg}</p>

        <input type="button" value="-" onClick={decrementData} />
        <p>{msg}</p>
        <input type="button" value="x" onClick={() => setCounter(0)}/>

        </>
    )
}
export default HookDemo;
// This component demonstrates the use of React hooks to manage state.
// It includes a counter that can be incremented or decremented, with validation to prevent it from going below 1 or above 5.
// A message is displayed if the user tries to exceed these limits.