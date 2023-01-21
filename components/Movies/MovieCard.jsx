import React from "react";
import Image from "next/image";
import styles from "./movies.module.scss";
import getRating from "../../lib/getRating";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
function MovieCard({ imgPath, title, rating, index, id }) {
  const router = useRouter();
  function handleClick(id) {
    router.replace(`/MovieDetail/${id}`);
  }
  return (
    <motion.div
      onClick={() => handleClick(id)}
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay: index * 0.01, type: false }}
      viewport={{ once: true }}
      className={styles["movie-card"]}
    >
      <Image src={imgPath} height="250" width="250" alt="image for a movie" />
      <div className={styles.textbox}>
        <h4>{title}</h4>
        <div className={styles["rating-box"]}>{getRating(rating)}</div>
      </div>
    </motion.div>
  );
}

export default MovieCard;
