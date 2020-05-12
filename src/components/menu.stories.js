import React from "react";

import Menu from "./menu";

export default { title: "Menu" };

export const plain = () => (
  <div style={{ background: "#000", padding: "1rem" }}>
    <Menu>
      <a href="/">Work</a>
      <a href="/">About</a>
      <a href="/">Careers</a>
      <a href="/">Blog</a>
      <a href="/">Contact</a>
    </Menu>
  </div>
);
