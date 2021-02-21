import React from "react";
import styles from "./friendList.module.scss";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.card}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
          <span>{isOnline ? "Online" : "Offline"}</span>
          <img
            src={avatar}
            alt={"Аватар пользователя" + "-" + name}
            width="48"
          />
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
