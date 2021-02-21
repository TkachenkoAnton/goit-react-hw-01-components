import React from "react";
import styles from "./socialProfile.module.scss";

const SocialProfile = ({ usersProfile }) => {
  return (
    <>
      {usersProfile.map(({ name, tag, location, avatar, stats }) => {
        const id = stats.followers * Math.random();
        return (
          <div key={id} className={styles.card}>
            <div>
              <img src={avatar} alt={"Аватар пользователя" + "-" + name} />
              <p>{name}</p>
              <p>@{tag}</p>
              <p>{location}</p>
            </div>
            <ul>
              <li>
                <span>Followers</span>
                <span>{stats.followers}</span>
              </li>
              <li>
                <span>Views</span>
                <span>{stats.views}</span>
              </li>
              <li>
                <span>Likes</span>
                <span>{stats.likes}</span>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default SocialProfile;
