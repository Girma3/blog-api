import styles from "./sideBar.module.css";

function SideBar() {
  return (
    <section className={styles.sideBar}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="logo" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.flexColumn}>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Users</a>
          </li>
          <li>
            <a href="#">Posts</a>
          </li>
          <li>
            <a href="#">Comments</a>
          </li>
        </ul>
      </nav>
      <div className={styles.profile}>
        <h1>admin</h1>
      </div>
    </section>
  );
}
export default SideBar;
