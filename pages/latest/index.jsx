import React from "react";
import RenderMovies from "../../components/RenderMovies";

function LatestMoviesPage(props) {
  const { movies, category, totalPages, url } = props;
  return (
    <main className="main">
      <RenderMovies
        movies={movies}
        category={category}
        totalPages={totalPages}
        url={url}
      />
    </main>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=4fcf6bd89c0e925e66c089389e26dd0f&language=en-US&page=4"
  );
  const data = await response.json();
  return {
    props: {
      movies: data.results,
      category: "latest",
      totalPages: 2,
      url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.imbd_api_key}&language=en-US&page=`,
    },
  };
}

export default LatestMoviesPage;
