import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [value, setValue] = useState("Initial value");
  const [RightBar, setRightBar] = useState("");
 


  const updateValue = (newValue) => {
    setValue(newValue);
  };
  
  const updateRightBar = (newRightbar) => {
    setRightBar(newRightbar);
  };


  return (
    <MyContext.Provider
      value={{
        value,
        updateValue,
        RightBar,
        updateRightBar
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
