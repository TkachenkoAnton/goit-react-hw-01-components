import React from "react";

const FriendList = ({ friends }) => {
  return (
    <ul>
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
