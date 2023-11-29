import React from "react";
import {useState} from "react";

const Content = () => {
  function handleNameChange() {
    const names = ["Earn", "Grow", "Give"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  const handleClick = (name) => {
    console.log(`Thanks for the support ${name}`);
  };
  const handleClick2 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p> Lets {handleNameChange()} Money </p>
      <button onClick={() => handleClick("Karthi")}> Subscribe</button>
      <button onClick={(e) => handleClick2(e)}> Play</button>
    </main>
  );
};

export default Content;
