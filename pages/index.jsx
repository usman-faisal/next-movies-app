import Hero from "../components/Hero/Hero";
import MoviesContainer from "../components/Movies/MoviesContainer";
export default function HomePage(props) {
  return (
    <main className="main">
      <Hero />
      <MoviesContainer movies={props.movies} />
    </main>
  );
}
export async function getStaticProps() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=4fcf6bd89c0e925e66c089389e26dd0f&language=en-US&page=1"
  );
  const data = await response.json();
  console.log(data);
  return {
    props: {
      movies: data.results,
    },
  };
}
