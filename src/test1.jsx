import React, { useEffect, useState, useReducer } from "react";
import jsondata from '../package.json'
export const Test1 = () => {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "add":
        return state + 1;
      case "min":
        return state - 1;
      default:
        return state;
    }
  }, 0);

  function fetchFunction() {
//console.log(jsondata)
  fetch('../pakage.JSON')
  .then( (res) => res.json() )
  .then( (data) => console.log( JSON.stringify(data)) )  
}


  return (
    <>
      <p style={{color:'red'}}>{count}</p>
      <button onClick={() => dispatch("add")}>Add</button>
      <button
        onClick={() => {
          dispatch("min");
        }}
      >
        Minus
      </button>
<br/>
<button onClick={fetchFunction}>fetch</button>


    </>
  );
};
