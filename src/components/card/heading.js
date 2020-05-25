import React from "react";

import styles from "./heading.module.css";

const Heading = ({ children }) => (
  <h3 className={styles.wrapper}>{children}</h3>
);

export default Heading;
