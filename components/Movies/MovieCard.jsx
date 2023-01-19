import React from "react";
import Image from "next/image";
import styles from "./movies.module.scss";
import getRating from "../../lib/getRating";
function MovieCard({ imgPath, title, rating, id }) {
  return (
    <div className={styles["movie-card"]}>
      <Image src={imgPath} height="250" width="250" alt="image for a movie" />
      <div className={styles.textbox}>
        <h4>{title}</h4>
        <div className={styles["rating-box"]}>{getRating(rating)}</div>
      </div>
    </div>
  );
}

export default MovieCard;
