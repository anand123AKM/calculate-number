import React from "react";
import styles from "./App.module.css";

const Button = ({ Click, key1 }) => {
  return (
    <>
      <button onClick={() => Click(key1)} className={styles.buttons}>
        {key1}
      </button>
    </>
  );
};

export default Button;
