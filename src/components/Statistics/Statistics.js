import React from "react";
import styles from "./statistics.module.scss";

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.card}>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(({ id, label, percentage }) => (
          <li key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
