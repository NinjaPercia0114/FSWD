import React, { useState } from "react";

function Sumdemo3() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [choice, setChoice] = useState("");
  const [ans, setAns] = useState("");

  const doProcess = () => {
    const n1 = parseInt(num1);
    const n2 = parseInt(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setAns("Please enter valid numbers.");
      return;
    }

    if (choice === "sum") {
      setAns("Sum is: " + (n1 + n2));
    } else if (choice === "sub") {
      setAns("Subtraction is: " + (n1 - n2));
    } else {
      setAns("Please select a valid operation.");
    }
  };

  return (
    <>
      <h1>Sum Demo 3</h1>

      <input
        type="text"
        placeholder="Enter first number"
        onChange={(e) => setNum1(e.target.value)}
      />
      <br />

      <input
        type="text"
        placeholder="Enter second number"
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />

      Choice:
      <select onChange={(e) => setChoice(e.target.value)}>
        <option value="">Select</option>
        <option value="sum">Sum</option>
        <option value="sub">Subtraction</option>
      </select>
      <br />

      <input type="button" value="Click Me" onClick={doProcess} />
      <p>{ans}</p>
    </>
  );
}

export default Sumdemo3;
