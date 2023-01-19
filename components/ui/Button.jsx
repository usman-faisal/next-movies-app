import React from "react";
import styles from "./button.module.scss";
function Button(props) {
  return <button className={styles.button}>{props.children}</button>;
}

export default Button;
