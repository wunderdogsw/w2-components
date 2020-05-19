import React from "react";

import styles from "./list.module.css";

const List = ({ children }) => <ul className={styles.wrapper}>{children}</ul>;

export default List;
