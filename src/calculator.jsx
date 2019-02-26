import React, { useState, useEffect } from "react";
import "./App.css";

export const Calculator = () => {
  const [input, setInput] = useState("");
  const [ans, setAns] = useState(0);

  function takeInput(e) {
    //console.log(e.target);
    if (e.target.innerHTML == "=" || e.target.innerHTML == "back") {
      try {
        let evalValue = eval(input);
        setAns(evalValue);
      } catch {
        console.log("wrong ");
      }
    } else {
      setInput(input + e.target.innerHTML);
    }

    if (e.target.innerHTML == "back") {
      setInput(input.slice(0, -1));
      console.log("from back");
    }

    //console.log(e.target.innerHTML);
  }

  useEffect(() => {
    try {
      let evalValue = eval(input);
      setAns(evalValue);
    } catch {
      console.log("wrong ");
    }
    //console.log('hihiihihi')
    //console.log({input})
  }, [input]);

  return (
    <div>
      <div className="flex">
        {" "}
        <div className="input">{input}</div>{" "}
      </div>
      <div className="flex">
        {" "}
        <div className="ans">{ans}</div>{" "}
      </div>
      <div className="flex">
        <button onClick={takeInput} className="btn">
          /
        </button>
        <button onClick={takeInput} className="btn">
          *
        </button>
        <button onClick={takeInput} className="btn-big">
          back
        </button>
      </div>
      <div className="flex">
        <button onClick={takeInput} className="btn">
          7
        </button>
        <button onClick={takeInput} className="btn">
          8
        </button>
        <button onClick={takeInput} className="btn">
          9
        </button>
        <button onClick={takeInput} className="btn">
          -
        </button>
      </div>
      <div className="flex">
        <button onClick={takeInput} className="btn">
          4
        </button>
        <button onClick={takeInput} className="btn">
          5
        </button>
        <button onClick={takeInput} className="btn">
          6
        </button>
        <button onClick={takeInput} className="btn">
          +
        </button>
      </div>
      <div className="flex">
        <button onClick={takeInput} className="btn">
          1
        </button>
        <button onClick={takeInput} className="btn">
          2
        </button>
        <button onClick={takeInput} className="btn">
          3
        </button>
        <button onClick={takeInput} className="btn">
          .
        </button>
      </div>
      <div className="flex">
        <button onClick={takeInput} className="btn-big">
          0
        </button>
        <button onClick={takeInput} className="btn-big">
          =
        </button>
      </div>
    </div>
  );
};
