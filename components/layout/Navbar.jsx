import Link from "next/link";
import React from "react";

import styles from "./Navbar.module.scss";
import NavbarList from "./NavbarList";
function Navbar() {
  return (
    <header className={styles.header}>
      <Link className={styles.link} href="/">
        REX
      </Link>
      <nav>
        <NavbarList />
      </nav>
      <footer className={styles.footer}>
        <p>&copy; All rights reserved.</p>
      </footer>
    </header>
  );
}

export default Navbar;
