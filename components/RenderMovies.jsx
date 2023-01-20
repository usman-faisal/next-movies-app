import React from "react";
import MoviesSection from "./Movies/MoviesSection";
import Pagination from "./ui/Pagination";
import usePagination from "../custom-hooks/usePagination";
export default function RenderMovies(props) {
  const { movies, category, totalPages, url } = props;
  const { data, currentPage, setCurrentPage } = usePagination(url);
  return (
    <>
      {currentPage === 1 ? (
        <>
          <MoviesSection moviesArr={movies} category={category} />
        </>
      ) : (
        <MoviesSection moviesArr={data} category={category} />
      )}
      {totalPages !== 1 && (
        <Pagination
          currentPageState={{ currentPage, setCurrentPage }}
          totalPages={totalPages}
        />
      )}
    </>
  );
}
