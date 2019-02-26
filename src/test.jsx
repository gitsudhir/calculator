import React, { useState } from "react";

export const Test = ({ name }) => {
  const [input, setInput] = useState("");
  return (
    <>
      <h1>hi there {name} </h1>
      <p>you are typing .....{input}</p>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
    </>
  );
};
