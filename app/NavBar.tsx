"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./NavBar.module.scss";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles["nav-container"]}>
        <Link href="/" className={styles.logo}>
          camellia
        </Link>
        <button
          className={styles["menu-toggle"]}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <div className={`${styles["nav-links"]} ${isOpen ? styles.open : ""}`}>
          <Link href="/">home</Link>
          <Link href="/about">portfolio</Link>
          <Link href="/contact">contact</Link>
        </div>
      </div>
    </nav>
  );
}
