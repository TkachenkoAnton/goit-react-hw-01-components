import React from "react";
import users from "./components/SocialProfile/user.json";
import SocialProfile from "./components/SocialProfile/SocialProfile";

const App = () => {
  return (
    <>
      {users.map(({ name, tag, location, avatar, stats }) => {
        const id = stats.followers * Math.random();
        return (
          <div key={id}>
            <SocialProfile
              name={name}
              tag={tag}
              location={location}
              avatar={avatar}
              stats={stats}
            />
          </div>
        );
      })}
    </>
  );
};

export default App;
