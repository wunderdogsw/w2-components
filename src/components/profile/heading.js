import React from "react";

import styles from "./heading.module.css";

const ProfileHeading = ({ children }) => (
  <h1 className={styles.wrapper}>{children}</h1>
);

export default ProfileHeading;
