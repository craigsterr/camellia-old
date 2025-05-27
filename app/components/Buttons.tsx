"use client";

import { useState } from "react";
import styles from "./Buttons.module.scss";

export default function Buttons() {
  const [active, setActive] = useState<"craig" | "leah">("craig");

  return (
    <div className={styles.toggleWrapper}>
      <button
        className={`${styles.toggleButton} ${
          active === "craig" ? styles.active : ""
        }`}
        onClick={() => setActive("craig")}
      >
        Craig
      </button>
      <button
        className={`${styles.toggleButton} ${
          active === "leah" ? styles.active : ""
        }`}
        onClick={() => setActive("leah")}
      >
        Leah
      </button>
    </div>
  );
}
