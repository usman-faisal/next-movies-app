import React from "react";
import styles from "./pagination.module.scss";
function Pagination({ currentPageState }) {
  function handleClick(pageNumber) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    currentPageState.setState(pageNumber);
  }
  return (
    <nav className={styles.pagination}>
      <ul>
        <li
          onClick={() => handleClick(1)}
          className={`${currentPageState.state === 1 && styles.active}`}
        >
          1
        </li>
        <li
          onClick={() => handleClick(2)}
          className={`${currentPageState.state === 2 && styles.active}`}
        >
          2
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
