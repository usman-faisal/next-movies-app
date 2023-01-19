import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import styles from "./hero.module.scss";
function Hero() {
  return (
    <section className={styles["section-hero"]}>
      <Image
        src="/images/hero-img.avif"
        alt="poster of a movie"
        fill={true}
        style={{ objectFit: "cover" }}
      />
      <div className={styles["section-hero-textbox"]}>
        <h1>
          Find your favourite movies on <em>REX</em>
        </h1>
        <Button>Explore Now</Button>
      </div>
    </section>
  );
}

export default Hero;
