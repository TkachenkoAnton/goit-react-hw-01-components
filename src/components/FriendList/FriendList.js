import React from "react";
import styles from "./friendList.module.scss";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.card}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={styles.friendsListItem}>
          <span
            className={
              isOnline
                ? styles.statusIdentificationOnline
                : styles.statusIdentificationOffline
            }
          ></span>
          <img
            className={styles.friendsListImg}
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
