import { useRouter } from "next/router";
import React from "react";
import styles from "./pagination.module.scss";
function Pagination({ totalPages }) {
  const router = useRouter();
  const pageNumber = router.query.category[1]?.slice(-1) || 1;
  const movieCategory = router.query.category[0];
  function handleClick(pageNumber) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    router.replace(`/sortby/${movieCategory}/page=${pageNumber}`);
  }
  const listArr = [];
  for (let i = 0; i < totalPages; i++) {
    listArr.push(
      <li
        key={i}
        className={`${pageNumber == i + 1 && styles.active}`}
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
