import React from "react";

import Logo from "./logo";

export default { title: "Logo" };

export const plain = () => (
  <div style={{ width: 320, padding: "1rem" }}>
    <Logo />
  </div>
);

export const inverse = () => (
  <div style={{ background: "#000", width: 320, padding: "1rem" }}>
    <Logo inverse />
  </div>
);
