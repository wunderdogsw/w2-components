import React from "react";

import Logo from "./logo";
import Heading from "./heading";
import Menu from "./menu";
import styles from "./footer.module.css";

const Footer = ({ heading, nav, copyright, legal }) => (
  <footer className={styles.wrapper}>
    <div className={styles.logo}>
      <Logo inverse />
    </div>
    <div className={styles.heading}>
      <Heading as="h1">{heading}</Heading>
    </div>
    <div className={styles.menu}>
      {nav && <Menu>{nav.map((item) => item)}</Menu>}
    </div>
    <div className={styles.smallprint}>
      {copyright && <div>{copyright}</div>}
      {legal && <nav>{legal.map((item) => item)}</nav>}
    </div>
  </footer>
);

export default Footer;
