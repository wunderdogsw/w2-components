import React from "react";
import ReactMarkdown from "react-markdown";

import styles from "./markdown.module.css";

const Markdown = (props) => (
  <ReactMarkdown className={styles.wrapper} {...props} />
);

export default Markdown;
