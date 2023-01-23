import React from "react";
import MoviesSection from "../../components/Movies/MoviesSection";
import Pagination from "../../components/ui/Pagination";

function PopularMoviesPage(props) {
  const { moviesArr, title } = props;
  const formattedTitle =
    (title.includes("_") && title.split("_").join(" ")) || title;
  return (
    <main className="main">
      <MoviesSection moviesArr={moviesArr} title={formattedTitle} />
      <Pagination totalPages={4} />
    </main>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const movieCategory = params.category[0];
  const currentPageNumber = params.category[1];
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieCategory}?api_key=${process.env.imbd_api_key}&language=en-US&${currentPageNumber}`
  );
  const data = await response.json();
  if (!data || !movieCategory || currentPageNumber?.slice(-1) >= 5) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      moviesArr: data.results,
      title: movieCategory,
    },
  };
}

export default PopularMoviesPage;
