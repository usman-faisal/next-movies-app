import Link from "next/link";
import React from "react";

import styles from "./Navbar.module.scss";
function Navbar() {
  return (
    <header className={styles.header}>
      <Link className={styles.link} href="/">
        REX
      </Link>
      <nav>
        <ul>
          <li>
            <Link className={styles.link} href="/">
              All movies
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/">
              About us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
