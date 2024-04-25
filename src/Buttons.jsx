import React from "react";
import styles from "./App.module.css";
import Button from "./Button";

const Buttons = ({ onButtonClick, item }) => {
  return (
    <>
      <div id={styles.buttons}>
        {item.map((Menu) => {
          return <Button Click={onButtonClick} key1={Menu.ton}></Button>;
        })}
      </div>
    </>
  );
};

export default Buttons;
