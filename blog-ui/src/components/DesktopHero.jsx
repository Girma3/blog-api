import styles from "./DesktopHero.module.css";
function DesktopHero() {
  return (
    <header className={`${styles.header} ${styles.flexColumn}`}>
      <div className={styles.flexRow}>
        <h1 className={styles.logo}>G Blog</h1>
        <div className={styles.searchHolder}>
          <label htmlFor="search" aria-label="Search blog ">
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search Blog"
              className={styles.searchBar}
            />{" "}
          </label>
          <button className={styles.searchBtn} aria-label="Search"></button>
        </div>
      </div>
      <div className={styles.flexRow}>
        <p className={styles.blogTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia omnis
        </p>
        <div className={styles.imgHolder}>
          <div className={`${styles.circle} ${styles.topCircle}`}></div>
          <div className={`${styles.circle} ${styles.backCircle}`}></div>
          <div className={styles.rect}></div>
          <div className={`${styles.circle} ${styles.bottomCircle}`}></div>
        </div>
      </div>
    </header>
  );
}
export default DesktopHero;
