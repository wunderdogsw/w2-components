import React from "react";

import styles from "./heading.module.css";

const Heading = ({ as, children }) => {
  const Tag = as;

  return <Tag className={styles.wrapper}>{children}</Tag>;
};

export default Heading;
