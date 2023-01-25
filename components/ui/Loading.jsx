import React from "react";
import styles from "./loading.module.scss";
function Loading() {
  return (
    <main className="main">
      <div className={styles.wrapper}>
        <div className={styles.loader}></div>
      </div>
    </main>
  );
}

export default Loading;
