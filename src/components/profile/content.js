import React from "react";

import styles from "./content.module.css";

const Content = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

export default Content;
