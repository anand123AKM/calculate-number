import React from "react";
import styles from "./App.module.css";

const Display = ({ calVal }) => {
  return (
    <>
      <input value={calVal} type="text" id={styles.display} readOnly />
    </>
  );
};

export default Display;
