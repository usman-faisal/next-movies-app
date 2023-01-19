import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import styles from "./hero.module.scss";
function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/hero-img.avif"
        alt={`poster image for movie`}
        fill={true}
        style={{ objectFit: "fill", borderRadius: 10 }}
      />
      <div className={styles["hero-textbox"]}>
        <h1>Welcome,</h1>
        <p>Find your favourite movies on REX</p>
        <Button>Explore Now</Button>
      </div>
    </section>
  );
}

export default Hero;
