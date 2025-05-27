import styles from "./Gallery.module.scss";
export default function Gallery() {
  return (
    <>
      <div className={styles.gallery}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles["gallery-item"]}>
            <span>Project {i + 1}</span>
          </div>
        ))}
      </div>
    </>
  );
}
