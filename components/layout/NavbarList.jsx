import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";
const paths = [
  { pathName: "/", text: "Home" },
  { pathName: "/sortby/popular", text: "Popular" },
  { pathName: "/sortby/upcoming", text: "Upcoming" },
  { pathName: "/sortby/top_rated", text: "Top rated" },
];

function NavbarList() {
  const router = useRouter();
  const currentPath =  !router.query.category ? "/" : `/sortby/${router.query.category[0]}`


  return (
    <ul>
      {paths.map((path, index) => {
        return (
          <li key={index + 1}>
            <Link
              href={path.pathName}
              className={`
            ${styles.link}
            ${currentPath === path.pathName && styles.active}
            `}
            >
              {path.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavbarList;
