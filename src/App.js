import React from "react";
import users from "./components/SocialProfile/user.json";
import statisticalData from "./components/Statistics/statistical-data.json";
import friends from "./components/FriendList/friends.json";
import SocialProfile from "./components/SocialProfile/SocialProfile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";

const App = () => {
  return (
    <>
      <SocialProfile usersProfiles={users} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
