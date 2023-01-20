import Image from "next/image";
import React, { useState } from "react";

function MovieDetailPage(props) {
  const imgPath = "http://image.tmdb.org/t/p/w500/" + props.data.backdrop_path;
  console.log(props.data);
  const [isLoading, setIsLoading] = useState(true);
  console.log(isLoading);
  function onImageLoad() {
    setIsLoading(false);
  }
  return (
    <main className="main">
      <Image
        src={imgPath}
        alt={`image of ${props.title}`}
        width={300}
        height={200}
        onLoadingComplete={onImageLoad}
      />
      {!isLoading && <h3>{props.data.title}</h3>}
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
  return {
    props: {
      data,
    },
  };
}
