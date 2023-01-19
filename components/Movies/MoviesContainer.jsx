import Image from "next/image";
import React from "react";
import Movie from "./Movie";
import styles from "./movies.module.scss";
function MoviesContainer(props) {
  return (
    <section className={styles["section-movies"]}>
      <h3>POPULAR</h3>
      <div className={styles.movies}>
        {props.movies.map((item) => {
          const imgPath = "https://image.tmdb.org/t/p/w500/" + item.poster_path;
          return <Movie imgPath={imgPath} key={item.id} title={item.title} />;
        })}
      </div>
    </section>
  );
}

export default MoviesContainer;
