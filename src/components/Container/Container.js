import React from "react";
import styles from "./container.module.scss";

const Container = ({ children }) => {
  return (
    <>
      <h1 className={styles.container}>Home Work №1</h1>
      <div className={styles.container}>{children}</div>
    </>
  );
};
export default Container;
