import React from "react";
import MoviesSection from "../../components/Movies/MoviesSection";
import Pagination from "../../components/ui/Pagination";
import usePagination from "../../custom-hooks/usePagination";

function PopularMoviesPage(props) {
  const { data, currentPage, setCurrentPage } = usePagination(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=4fcf6bd89c0e925e66c089389e26dd0f&language=en-US&page="
  );
  return (
    <main className="main">
      {currentPage === 1 ? (
        <>
          <MoviesSection moviesArr={props.movies} category="popular" />
        </>
      ) : (
        <MoviesSection moviesArr={data} category="popular" />
      )}
      <Pagination
        currentPageState={{ state: currentPage, setState: setCurrentPage }}
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
    },
  };
}

export default PopularMoviesPage;
