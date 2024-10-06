import React, { useState } from 'react';


const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');


  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  //addition
  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum.toString());
  };

  //subtraction
  const handleSubtraction = () => {
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(difference.toString());
  };

  //multiplication
  const handleMultiplication = () => {
    const product = parseFloat(num1) * parseFloat(num2);
    setResult(product.toString());
  };

  //division
  const handleDivision = () => {
    if (num2 === '0') {
      setResult('Error: Division by zero!');
    } else {
      const quotient = parseFloat(num1) / parseFloat(num2);
      setResult(quotient.toString());
    }
  };

  //clearing the input fields and results
  const handleReset = () => {
    setNum1('');
    setNum2('');
    setResult('');
  };


  return (
    <div className="calculator-container my-3">
      <h1>Calculator</h1>
      <div className="input-fields">
        <input type="number" value={num1} onChange={handleNum1Change} />
        <input type="number" value={num2} onChange={handleNum2Change} />
      </div>
      <div className="operators">
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div className="result-container">
      <div className="result">Result: {result}</div>
      </div>
    </div>
  );
};

export default Calculator;