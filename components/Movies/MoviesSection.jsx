import React from "react";
import MovieCard from "./MovieCard";
import styles from "./movies.module.scss";
function MoviesSection({ moviesArr, category }) {
  return (
    <section>
      <h2 className="heading-primary">{category}</h2>
      <div className={styles["movies-container"]}>
        {moviesArr.map((movie) => {
          const imgPath = `http://image.tmdb.org/t/p/w500/${movie.poster_path}`;
          const { title, id, vote_average } = movie;
          return (
            <MovieCard
              key={id}
              imgPath={imgPath}
              title={title}
              rating={vote_average}
            />
          );
        })}
      </div>
    </section>
  );
}

export default MoviesSection;
