import Head from "next/head";
import Hero from "../components/Hero/Hero";
import MoviesSection from "../components/Movies/MoviesSection";

export default function HomePage(props) {
    console.log(props.movies)
  return (
    <>
      <Head>
        <meta name="description" content="all movies page" />
        <title>Home page</title>
      </Head>
      <main className="main">
        <Hero />
        <MoviesSection moviesArr={props.movies} title="Upcoming Movies" />
      </main>
    </>
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
