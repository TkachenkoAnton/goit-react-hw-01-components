import React from "react";
import users from "./components/SocialProfile/user.json";
import statisticalData from "./components/Statistics/statistical-data.json";
import SocialProfile from "./components/SocialProfile/SocialProfile";
import Statistics from "./components/Statistics/Statistics";

const App = () => {
  return (
    <>
      <SocialProfile usersProfiles={users} />
      <Statistics title="Upload stats" stats={statisticalData} />
    </>
  );
};

export default App;
