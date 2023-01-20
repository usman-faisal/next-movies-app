import React from "react";
import styles from "./pagination.module.scss";
function Pagination({ currentPageState, totalPages }) {
  function handleClick(pageNumber) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    currentPageState.setCurrentPage(pageNumber);
  }
  console.log(totalPages);
  const listArr = [];
  for (let i = 0; i < totalPages; i++) {
    listArr.push(
      <li
        key={i}
        className={`${currentPageState.currentPage === i + 1 && styles.active}`}
        onClick={() => handleClick(i + 1)}
      >
        {i + 1}
      </li>
    );
  }

  return (
    <nav className={styles.pagination}>
      <ul>{listArr}</ul>
    </nav>
  );
}

export default Pagination;
