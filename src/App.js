import './App.css';
import React from 'react';
import { useState } from "react";

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      setResult(eval(input).toString());
      return null;
      }
     else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prev) => prev + value);
    }
  };
  
  return (
    <div className="container">
      <div className="display">
        <div className="input" type="text">{input}</div>  
        <div className="result">{result}</div>
      </div>
      <div className="operators">
          {['/', '*', '-', '+'].map((value) => (
            <button label={value} onClick={() => handleButtonClick(value)}>{value}</button>
          ))}
        </div>
      <div className="buttons">
        <div className="numbers">
          {['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', 'C'].map((value) => (
            <button label={value} onClick={() => handleButtonClick(value)}>{value}</button>
          ))}
        </div>
        <button className="equal" onClick={() => handleButtonClick('=')}>=</button>
      </div>
    </div>
  );
}

export default App;
