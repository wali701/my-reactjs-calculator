import React, { useState } from 'react';
import Button from './components/Button';
import Display from './components/Display';
import ClearButton from './components/ClearButton';
import './styles/App.css';
import { evaluate } from 'mathjs';
const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult(null);
  };

  const handleOperation = () => {
    try {
      const result = evaluate(input);  // Safely evaluate the input expression
      setResult(result);
      setInput('');
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <div className="buttons">
        <Button value="1" onClick={handleButtonClick} />
        <Button value="2" onClick={handleButtonClick} />
        <Button value="3" onClick={handleButtonClick} />
        <Button value="+" onClick={handleButtonClick} />
        <Button value="4" onClick={handleButtonClick} />
        <Button value="5" onClick={handleButtonClick} />
        <Button value="6" onClick={handleButtonClick} />
        <Button value="-" onClick={handleButtonClick} />
        <Button value="7" onClick={handleButtonClick} />
        <Button value="8" onClick={handleButtonClick} />
        <Button value="9" onClick={handleButtonClick} />
        <Button value="*" onClick={handleButtonClick} />
        <Button value="0" onClick={handleButtonClick} />
        <Button value="." onClick={handleButtonClick} />
        <Button value="/" onClick={handleButtonClick} />
        <Button value="=" onClick={handleOperation} />
        <ClearButton onClick={handleClear} />
      </div>
    </div>
  );
};

export default App;
