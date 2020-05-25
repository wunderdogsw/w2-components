import React from "react";

import Profile from "./index";

export default { title: "Profile" };

export const plain = () => (
  <Profile>
    <Profile.Image>
      <img src="https://placedog.net/840" />
    </Profile.Image>
    <Profile.Content>
      <Profile.Heading>Deputy Dawg</Profile.Heading>
      <Profile.Subheading>Pupper</Profile.Subheading>
    </Profile.Content>
  </Profile>
);
