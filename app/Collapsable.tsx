"use client";

import { useState } from "react";
import styles from "./Collapsable.module.scss";

export default function Collapsable() {
  const [openSections, setOpenSections] = useState([
    false,
    false,
    false,
    false,
  ]);
  const toggleSections = (section: number) => {
    setOpenSections((prev) =>
      prev.map((isOpen, i) => (i === section ? !isOpen : isOpen))
    );
  };

  return (
    <>
      {" "}
      <h2 id="services" className={styles.header}>
        Services we offer:
      </h2>
      <h3
        onClick={() => toggleSections(0)}
        style={{ cursor: "pointer" }}
        className={`${styles.collapsable} ${styles["first-collapsable"]}`}
      >
        {" "}
        Web Design and Development
      </h3>
      {openSections[0] && (
        <p>
          We deliver customized web design and development solutions that help
          your business grow and engage your audience effectively.
        </p>
      )}
      <h3
        onClick={() => toggleSections(1)}
        style={{ cursor: "pointer" }}
        className={styles.collapsable}
      >
        Site Critiques
      </h3>
      {openSections[1] && (
        <p>
          We deliver customized web design and development solutions that help
          your business grow and engage your audience effectively.
        </p>
      )}
      <h3
        onClick={() => toggleSections(2)}
        style={{ cursor: "pointer" }}
        className={styles.collapsable}
      >
        Design Consulting
      </h3>
      {openSections[2] && (
        <p>
          We deliver customized web design and development solutions that help
          your business grow and engage your audience effectively.
        </p>
      )}
      <h3
        onClick={() => toggleSections(3)}
        style={{ cursor: "pointer" }}
        className={styles.collapsable}
      >
        Brand Expansion
      </h3>
      {openSections[3] && (
        <p>
          We deliver customized web design and development solutions that help
          your business grow and engage your audience effectively.
        </p>
      )}
    </>
  );
}
