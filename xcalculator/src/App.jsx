import React, { useState } from 'react';


export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const containerStyle={
    display: "flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  }
  const buttonStyle={
    height:"30px",
    width:"30px",
    padding:"5px"

  }
  const rowStyle={
    display: "flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    gap:"10px"
  }
  const gridStyle={
    display: "flex",
    flexDirection:"column",
    gap: "10px"
  }

  return (
    <div style={containerStyle}>
      <h1>React Calculator</h1>
      <div >
        <input type="text" value={input} readOnly />
      </div>
      <div >
        <div>{result}</div>
        <br />
      </div>
      <div style={gridStyle}>
        <div style={rowStyle}>
          <button style={buttonStyle} onClick={() => handleButtonClick('7')}>7</button>
          <button style={buttonStyle} onClick={() => handleButtonClick('8')}>8</button>
          <button style={buttonStyle} onClick={() => handleButtonClick('9')}>9</button>
          <button style={buttonStyle} onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div style={rowStyle}>
          <button style={buttonStyle} onClick={() => handleButtonClick('4')}>4</button>
          <button style={buttonStyle} onClick={() => handleButtonClick('5')}>5</button>
          <button style={buttonStyle} onClick={() => handleButtonClick('6')}>6</button>
          <button style={buttonStyle} onClick={() => handleButtonClick('-')}>-</button>
          </div>
        <div style={rowStyle}>
          <button style={buttonStyle} onClick={() => handleButtonClick('1')}>1</button>
          <button style={buttonStyle} onClick={() => handleButtonClick('2')}>2</button>
          <button style={buttonStyle} onClick={() => handleButtonClick('3')}>3</button>
          <button style={buttonStyle} onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div style={rowStyle}>
        <button style={buttonStyle} onClick={handleClear}>C</button> 
          <button style={buttonStyle} onClick={() => handleButtonClick('0')}>0</button>
          <button style={buttonStyle} onClick={handleCalculate}>=</button>
          <button style={buttonStyle} onClick={() => handleButtonClick('/')}>/</button>
          </div>
      </div>
      
    </div>
  );
};
