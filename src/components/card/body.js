import React from "react";

import styles from "./body.module.css";

const Body = ({ children }) => <div className={styles.wrapper}>{children}</div>;

export default Body;
