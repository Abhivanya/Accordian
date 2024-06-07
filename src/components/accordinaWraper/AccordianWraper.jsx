import React, { useContext } from "react";
import "./AccordianWraper.css";
import Accordian from "../accrodian/Accordian";

import { AccordianContext } from "../AccordianContext";

const AccordianWraper = () => {
  const { data } = useContext(AccordianContext);

  return (
    <div className="container">
      {data.map((accordian) => (
        <Accordian
          id={accordian.id}
          key={accordian.id}
          questions={accordian.questions}
          heading={accordian.heading}
        />
      ))}
    </div>
  );
};
export default AccordianWraper;
