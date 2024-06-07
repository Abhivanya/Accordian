import React, { useContext } from "react";
import Question from "../question/Question";
import "./Questions.css";
import { AccordianContext } from "../AccordianContext";

const Questions = ({ questions, setIsActive, id }) => {
  const {
    defaultOpton,
    setDefaultOption,
    activeAccordian,
    setActiveAccordian,
  } = useContext(AccordianContext);

  const handleSave = (id) => {
    if (id < 3) {
      setActiveAccordian((prevState) => ({
        ...prevState,
        [id + 1]: true,
      }));
    }
    setIsActive(false);
    console.log(activeAccordian);
  };

  const handleClear = (id) => {};
  return (
    <>
      {questions.map((question, index) => (
        <Question question={question} key={index} defaultOpton />
      ))}
      <div className="buttons">
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
