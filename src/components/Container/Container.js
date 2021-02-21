import React from "react";
import PropTypes from "prop-types";
import styles from "./container.module.scss";

const Container = ({ children }) => {
  return (
    <>
      <h1 className={styles.container}>Home Work №1</h1>
      <div className={styles.container}>{children}</div>
    </>
  );
};

Container.propTypes = {
  children: PropTypes.array.isRequired,
};
export default Container;
