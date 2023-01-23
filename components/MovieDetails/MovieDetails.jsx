import Image from "next/image";
import React from "react";
import getRating from "../../lib/getRating";
import styles from "./movie-details.module.scss";
function MovieDetails({ bgImgPath, movieImgPath, title, overview }) {
  return (
    <>
      <div className={styles["details-header"]}>
        <Image
          blurDataURL="/images/image-placeholder.svg"
          placeholder="blur"
          width={500}
          height={500}
          src={bgImgPath}
          alt="hey"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles["details-main"]}>
        <Image
          blurDataURL="/images/image-placeholder.svg"
          src={movieImgPath}
          alt={`image of ${title}`}
          placeholder="blur"
          width={300}
          height={300}
        />
        <div className={styles["details-main-textbox"]}>
          <div className={styles.description}>
            <h3>{title}</h3>
            <div>{getRating(5)}</div>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
