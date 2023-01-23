import React from "react";
import MovieDetails from "../../components/MovieDetails/MovieDetails";

function MovieDetailPage(props) {
  const bgImgPath =
    "http://image.tmdb.org/t/p/original/" + props.data.backdrop_path;
  const movieImgPath =
    "http://image.tmdb.org/t/p/w500/" + props.data.poster_path;
  return (
    <main className="main">
      <MovieDetails
        title={props.data.title}
        overview={props.data.overview}
        bgImgPath={bgImgPath}
        movieImgPath={movieImgPath}
      />
    </main>
  );
}

export default MovieDetailPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.imbd_api_key}&language=en-US`
  );
  const data = await response.json();
  if (!data || !response.ok) {
    return {
      notFound: true,
      // redirect: {
      //   destination: "/",
      //   permenant: false,
      // },
    };
  }
  return {
    props: {
      data,
    },
  };
}
