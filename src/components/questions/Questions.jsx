import React, { useContext, useState } from "react";
import Question from "../question/Question";
import "./Questions.css";
import { AccordianContext } from "../AccordianContext";

const Questions = ({ questions, setIsActive, id }) => {
  const { activeAccordian, setActiveAccordian } = useContext(AccordianContext);

  const initialAnswers = questions.map(() => "No");
  const [answers, setAnswers] = useState(initialAnswers);
  const [btnVisible, setBtnVisible] = useState(false);

  const handleAnswerChange = (index, value) => {
    setBtnVisible(true);
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSave = (id) => {
    if (id === 1) {
      let flag = true;
      console.log(initialAnswers);
      console.log(answers);

      for (let i = 0; i < answers.length; i++) {
        if (answers[i] !== initialAnswers[i]) {
          flag = false;
          break;
        }
      }
      if (flag) {
        setActiveAccordian((prevState) => ({
          ...prevState,
          2: false,
          3: false,
        }));

        setIsActive(false);
        setBtnVisible(false);
        return;
      }
    }

    if (id < 3) {
      setActiveAccordian((prevState) => ({
        ...prevState,
        [id + 1]: true,
      }));
    }
    setIsActive(false);
  };

  const handleClear = (id) => {
    setAnswers(initialAnswers);
  };

  return (
    <>
      {questions.map((question, index) => (
        <Question
          question={question}
          key={index}
          selectedValue={answers[index]}
          onAnswerChange={(value) => handleAnswerChange(index, value)}
        />
      ))}
      <div className={btnVisible ? "buttons" : "disablebtn"}>
        <button className="save" onClick={() => handleSave(id)}>
          Save
        </button>
        <button className="cancel" onClick={() => handleClear(id)}>
          Cancel
        </button>
      </div>
    </>
  );
};

export default Questions;
