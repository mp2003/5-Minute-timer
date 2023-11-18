import React, { useState, useEffect } from 'react';
import './App.css';
import TicTacToeGame from './tic-tac-toe';

const App = () => {
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(() => {
    generateNumbers();
  }, [score]);

  const generateNumbers = () => {
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleCheck = () => {
    if (parseInt(input, 10) === num1 * num2) {
      setScore(score + 1);
      setInput('');
      generateNumbers();
    }
    else {
      setScore(score - 1);
      setInput('');
      generateNumbers();
    }
  };

  return (
    <TicTacToeGame />
  );
};

export default App;
