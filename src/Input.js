import React from "react";
import { useState } from "react";

const Input = ({getInputValue}) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
    getInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search By Name.."
        value={input}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
