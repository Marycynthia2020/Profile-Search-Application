import React from "react";
import { useState } from "react";

const Input = ({getInputValue}) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    if(input.length < 1 && event.target.value === " ") return //add input validation
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
      /> {/*remove outline and border on focus*/}
    </div>
  );
};

export default Input;
