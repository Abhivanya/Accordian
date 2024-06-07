import React, { createContext, useState } from "react";
import data from "../data";
import { FaBullseye } from "react-icons/fa";
const AccordianContext = createContext();

const ContextProvider = ({ children }) => {
  const [firstAccordianCompleted, setFirstAccordianCompleted] = useState(false);
  const [activeAccordian, setActiveAccordian] = useState({
    1: true,
    2: false,
    3: false,
  });
  return (
    <AccordianContext.Provider
      value={{
        firstAccordianCompleted,
        setFirstAccordianCompleted,
        data,
        activeAccordian,
        setActiveAccordian,
      }}
    >
      {children}
    </AccordianContext.Provider>
  );
};

export { AccordianContext, ContextProvider };
