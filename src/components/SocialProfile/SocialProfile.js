import React from "react";

const SocialProfile = ({ name, tag, location, avatar, stats }) => {
  return (
    <>
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
    </>
  );
};

export default SocialProfile;
