import Image from "next/image";
import React from "react";

function MovieDetailPage(props) {
  const bgImgPath =
    "http://image.tmdb.org/t/p/original/" + props.data.backdrop_path;
  const movieImgPath =
    "http://image.tmdb.org/t/p/w500/" + props.data.poster_path;
  return (
    <main className="main">
      <div className="details-header">
        <Image
          width={500}
          height={500}
          src={bgImgPath}
          alt="hey"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="details-main">
        <Image
          src={movieImgPath}
          alt={`image of ${props.title}`}
          width={300}
          height={300}
        />
        <h3>{props.data.title}</h3>
      </div>
    </main>
  );
}

export default MovieDetailPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=4fcf6bd89c0e925e66c089389e26dd0f&language=en-US`
  );
  const data = await response.json();
  if (!data || !response.ok) {
    return {
      notFound: true,
      redirect: {
        destination: "/",
        permenant: true,
      },
    };
  }
  return {
    props: {
      data,
    },
  };
}
