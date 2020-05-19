import React from "react";

import Markdown from "./markdown";

export default { title: "Markdown" };

export const plain = () => {
  const source =
    "# Lorem ipsum\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  return <Markdown source={source} />;
};

export const list = () => {
  const source = "# Lorem ipsum\n* Lorem ipsum\n* Lorem ipsum";

  return <Markdown source={source} />;
};
