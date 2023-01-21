import React from "react";
import RenderMovies from "../../components/RenderMovies";

function TopRatedMoviesPage(props) {
  const { movies, url, category, totalPages } = props;
  return (
    <main className="main">
      <RenderMovies
        movies={movies}
        url={url}
        category={category}
        totalPages={totalPages}
      />
    </main>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=4fcf6bd89c0e925e66c089389e26dd0f&language=en-US&page=1"
  );
  const data = await response.json();
  return {
    props: {
      movies: data.results,
      url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.imbd_api_key}&language=en-US&page=`,
      category: "top rated",
      totalPages: 2,
    },
  };
}

export default TopRatedMoviesPage;
