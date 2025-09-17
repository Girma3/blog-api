import styles from "./Hero.module.css";
function Hero() {
  return (
    <header className={`${styles.header} ${styles.flexColumn}`}>
      <nav>
        <h1 className={styles.logo}>G Blog</h1>
      </nav>
      <div className={`${styles.searchHolder} ${styles.flexRow}`}>
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
    </header>
  );
}
export default Hero;
