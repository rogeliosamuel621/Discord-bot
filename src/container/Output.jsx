import React from "react";
import "../assets/styles/output.css";

const Output = ({ Word }) => {
  return (
    <header>
      <h1>TYPING SPEED TEST</h1>
      <p>{Word}</p>
    </header>
  );
};

export default Output;
