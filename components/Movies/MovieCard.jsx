import React from "react";
import Image from "next/image";
import styles from "./movies.module.scss";
import getRating from "../../lib/getRating";
import { motion } from "framer-motion";
function MovieCard({ imgPath, title, rating, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: 100 }}
      whileInView={{ opacity: 1, translateX: 0 }}
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