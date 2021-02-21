import React from "react";
import PropTypes from "prop-types";
import styles from "./socialProfile.module.scss";

const SocialProfile = ({ usersProfile }) => {
  return (
    <>
      {usersProfile.map(({ name, tag, location, avatar, stats }) => {
        const id = stats.followers * Math.random();
        return (
          <div key={id} className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src={avatar}
                alt={"Аватар пользователя" + "-" + name}
              />
              <p>{name}</p>
              <p>@{tag}</p>
              <p>{location}</p>
            </div>
            <ul className={styles.list}>
              <li className={styles.listItems}>
                <span>Followers</span>
                <span>{stats.followers}</span>
              </li>
              <li className={styles.listItems}>
                <span>Views</span>
                <span>{stats.views}</span>
              </li>
              <li className={styles.listItems}>
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

SocialProfile.propTypes = {
  usersProfile: PropTypes.array.isRequired,
};

export default SocialProfile;
