import { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import MoviesSection from "../components/Movies/MoviesSection";
import Pagination from "../components/ui/Pagination";
export default function HomePage(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (currentPage === 1) {
      return;
    }
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=4fcf6bd89c0e925e66c089389e26dd0f&language=en-US&page=" +
        currentPage
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, [currentPage]);
  return (
    <main className="main">
      {currentPage === 1 ? (
        <>
          <Hero />
          <MoviesSection moviesArr={props.movies} category="Upcoming Movies" />
        </>
      ) : (
        <MoviesSection moviesArr={data} category="Upcoming Movies" />
      )}
      <Pagination
        currentPageState={{ state: currentPage, setState: setCurrentPage }}
      />
    </main>
  );
}
export async function getStaticProps() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=4fcf6bd89c0e925e66c089389e26dd0f&language=en-US&page=1"
  );
  const data = await response.json();
  return {
    props: {
      movies: data.results,
    },
  };
}
