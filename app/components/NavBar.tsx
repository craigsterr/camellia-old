"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavBar.module.scss";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
          <Link href="/" className={pathname === "/" ? styles.active : ""}>
            home
          </Link>
          <Link
            href="/portfolio"
            className={pathname === "/portfolio" ? styles.active : ""}
          >
            portfolio
          </Link>
          <Link
            href="/contact"
            className={pathname === "/contact" ? styles.active : ""}
          >
            contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
