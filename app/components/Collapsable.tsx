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
      <h2 id="services" className={styles.header}>
        Services we offer:
      </h2>

      <h3
        onClick={() => toggleSections(0)}
        style={{ cursor: "pointer" }}
        className={`${styles.collapsable} ${styles["first-collapsable"]}`}
      >
        Web Design and Development
      </h3>
      {openSections[0] && (
        <p className={`${styles.collapsable} ${styles["first-collapsable"]}`}>
          We build responsive, performance-optimized websites tailored to your
          brand and business goals. Whether it’s a sleek landing page or a
          dynamic web app, we ensure your site is fast, accessible, and
          user-friendly.
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
        <p className={`${styles.collapsable} ${styles["first-collapsable"]}`}>
          We offer honest, constructive feedback on your current website — from
          UI/UX design to performance and SEO. You&apos;ll receive clear,
          actionable advice on how to elevate your online presence.
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
        <p className={`${styles.collapsable} ${styles["first-collapsable"]}`}>
          Get expert guidance on visual design, branding, layout systems, and
          usability. We work with your existing team or independently to align
          your product’s look and feel with its purpose and audience.
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
        <p className={`${styles.collapsable} ${styles["first-collapsable"]}`}>
          We help growing businesses scale their digital brand with cohesive
          design systems, scalable web platforms, and strategic design thinking
          — ensuring every interaction feels consistent and intentional.
        </p>
      )}
    </>
  );
}
