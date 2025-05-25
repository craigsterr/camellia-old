import Image from "next/image";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <>
      <section className={styles.footer} aria-labelledby="contact">
        <div className={styles["footer-content"]}>
          <div className={styles.left}>
            <div className={styles["left-content"]}>
              <h2>Let&apos;s talk:</h2>
            </div>
            <div className={styles["left-content"]}>
              <h3>Email:</h3>
              <p>camelliaemail@gmail.com</p>
            </div>
            <div className={styles["left-content"]}>
              <h3>Phone:</h3>
              <p>123 - 456 - 7890</p>
            </div>
          </div>
          <div className="right">
            <h2>Check us out:</h2>
            <Image
              src="/images/insta-logo.webp"
              alt="Instagram Logo"
              width={100}
              height={100}
            />{" "}
            <Image
              src="/images/linkedin-logo.webp"
              alt="LinkedIn Logo"
              width={100}
              height={100}
            />{" "}
          </div>
        </div>
      </section>
    </>
  );
}
