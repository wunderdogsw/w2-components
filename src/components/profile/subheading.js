import React from "react";

import styles from "./subheading.module.css";

const Subheading = ({ children }) => (
  <h3 className={styles.wrapper}>{children}</h3>
);

export default Subheading;
