import React from "react";

const SocialProfile = ({ usersProfiles }) => {
  return (
    <>
      {usersProfiles.map(({ name, tag, location, avatar, stats }) => {
        const id = stats.followers * Math.random();
        return (
          <div key={id}>
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
