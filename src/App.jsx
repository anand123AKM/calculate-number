import React, { useState } from "react";
import styles from "./App.module.css";
import Display from "./Display";
import Buttons from "./Buttons";
import Api1 from "./Api";

const App = () => {
  const [calVal, setCalVal] = useState("");
  const ButtonClick = (key1) => {
    if (key1 === "C") {
      let newValue = "";
      setCalVal(newValue);
    } else if (key1 === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newcalitem = calVal + key1;
      setCalVal(newcalitem);
    }
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.head}>
        <u>Calculator</u>
      </div>
      <Display calVal={calVal}></Display>
      <Buttons onButtonClick={ButtonClick} item={Api1}></Buttons>
    </div>
  );
};

export default App;
