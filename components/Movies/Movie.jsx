import Image from "next/image";
import React from "react";
import styles from "./movies.module.scss";
function Movie({ title, imgPath }) {
  return (
    <div className={styles.movie}>
      <Image src={imgPath} width={300} height={200} alt="movie" />
      <div className={styles["movie-textbox"]}>
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default Movie;
