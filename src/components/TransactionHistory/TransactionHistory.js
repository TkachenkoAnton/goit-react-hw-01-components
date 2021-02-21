import React from "react";
import PropTypes from "prop-types";
import styles from "./transactionHistory.module.scss";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.cardTable}>
      <thead className={styles.tableHead}>
        <tr>
          <th className={styles.tableHeadItem}>Type</th>
          <th className={styles.tableHeadItem}>Amount</th>
          <th className={styles.tableHeadItem}>Currency</th>
        </tr>
      </thead>

      {items.map(({ id, type, amount, currency }) => (
        <tbody key={id} className={styles.tableBody}>
          <tr>
            <td className={styles.tableBodyItem}>{type}</td>
            <td className={styles.tableBodyItem}>{amount}</td>
            <td className={styles.tableBodyItem}>{currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
