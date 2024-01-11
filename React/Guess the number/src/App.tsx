import React, { useState, useEffect } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [score, setScore] = useState(0);
  const generateNumber = () => {
    const number1 = Math.floor(Math.random() * (10 - 1) + 1);
    const number2 = Math.floor(Math.random() * (10 - 1) + 1);
    const product = number1 * number2;

    return { number1, number2, product };
  };

  const [question, setQuestion] = useState(generateNumber());

  useEffect(() => {
    const resetAndGenerateQuestion = () => {
      setValue("");
      const { number1, number2, product } = generateNumber();
      setQuestion({ number1, number2, product });
    };
    resetAndGenerateQuestion();
  }, [score]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handelClick = () => {
    const enteredValue: number = parseInt(value, 10);

    question.product === enteredValue
      ? setScore(score + 1)
      : setScore(score - 0.25);
  };
  return (
    <>
      <div className="box">
        <h1> Answer the following :</h1>
        <h2>
          {question.number1} * {question.number2}
        </h2>
        <input
          type="value"
          placeholder="Enter the value"
          onChange={handleChange}
        />
        <button type="submit" onClick={handelClick}>
          submit
        </button>
        <h1>score : {score} </h1>
      </div>
    </>
  );
};

export default App;
