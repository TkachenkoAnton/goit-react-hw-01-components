import React from "react";
import styles from "./statistics.module.scss";

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.card}>
      {title && <h2 className={styles.statisticTitle}>{title}</h2>}
      <ul className={styles.statisticList}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={styles.statisticItems}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
