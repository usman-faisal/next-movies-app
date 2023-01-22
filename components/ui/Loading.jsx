import React from "react";
import styles from "./loading.module.scss";
function Loading() {
  return (
    <div className="main">
      <div className={styles.loader}></div>
    </div>
  );
}

export default Loading;
