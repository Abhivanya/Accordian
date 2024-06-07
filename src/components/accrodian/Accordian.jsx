import React, { useContext, useEffect, useState } from "react";
import "./Accordian.css";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Questions from "../Questions/Questions";
import { AccordianContext } from "../AccordianContext";

const Accordian = ({ questions, heading, id }) => {
  const [isActive, setIsActive] = useState(false);
  const [editable, setEditable] = useState(false);
  const { activeAccordian } = useContext(AccordianContext);

  const handleToggle = () => {
    if (editable) {
      setIsActive(!isActive);
    } else {
      alert("Please first save the previous accordian!");
    }
  };

  useEffect(() => {
    if (activeAccordian[id]) setEditable(true);
  }, [activeAccordian]);

  return (
    <div className="accordian">
      <div
        onClick={handleToggle}
        className={isActive ? "active heading" : "heading"}
      >
        {heading}
        <div className="icon">
          {isActive ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </div>
      </div>
      <div className={isActive ? "showPanel panel" : "hidePanel panel"}>
        <Questions questions={questions} setIsActive={setIsActive} id={id} />
      </div>
    </div>
  );
};

export default Accordian;
