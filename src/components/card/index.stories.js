import React from "react";

import Card from "./index";

export default { title: "Card" };

export const plain = () => (
  <Card>
    <Card.Heading>Lorem ipsum</Card.Heading>
    <Card.Meta>1970-01-01</Card.Meta>
    <Card.Body>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
    </Card.Body>
  </Card>
);
