import React from "react";

import styles from "./base.module.css";

const Base = ({ children }) => <div className={styles.wrapper}>{children}</div>;

export default Base;
