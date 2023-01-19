import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";
function NavbarList() {
  const router = useRouter();
  const path = router.pathname;
  return (
    <ul>
      <li>
        <Link
          className={`${styles.link} ${path === "/" && styles.active}`}
          activ
          href="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={`${styles.link} ${path === "/popular" && styles.active}`}
          href="/popular"
        >
          Popular
        </Link>
      </li>
      <li>
        <Link
          className={`${styles.link} ${path === "/latest" && styles.active}`}
          href="/latest"
        >
          Latest
        </Link>
      </li>
      <li>
        <Link
          className={`${styles.link} ${path === "/top-rated" && styles.active}`}
          href="/top-rated"
        >
          Top rated
        </Link>
      </li>
    </ul>
  );
}

export default NavbarList;
