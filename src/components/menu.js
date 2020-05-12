import React from "react";

import styles from "./menu.module.css";

const Menu = ({ children }) => <nav className={styles.wrapper}>{children}</nav>;

export default Menu;
