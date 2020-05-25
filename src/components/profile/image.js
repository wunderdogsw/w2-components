import React from "react";

import styles from "./image.module.css";

const Image = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

export default Image;
