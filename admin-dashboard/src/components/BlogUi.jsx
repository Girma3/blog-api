import styles from "./BlogUi.module.css";

function BlogUi({ img, title, author, date, status, comments }) {
  return (
    <div className={`${styles.flexRow} ${styles.blogUi}`}>
      {img === undefined ? (
        <div className={styles.placeholderImg}></div>
      ) : (
        <img src={img} alt="Blog" className={styles.blogImage} />
      )}
      <div className={styles.flexColumn}>
        <div className={styles.flexColumn}>
          <h2 className={styles.blogTitle}>{title}</h2>
          <div className={styles.flexRow}>
            <p className={styles.blogAuthor}>By {author}</p>
            <p className={styles.blogDate}>{date}</p>
            <p className={styles.blogComments}>{comments} comments</p>
          </div>
        </div>
        <div className={`${styles.flexRow} ${styles.blogActions}`}>
          {status === "PUBLISHED" && (
            <p className={`${styles.published} ${styles.blogStatus}`}>
              {status}
            </p>
          )}
          {status === "DRAFT" && (
            <p className={`${styles.draft} ${styles.blogStatus}`}>{status}</p>
          )}
          {status === "ARCHIVED" && (
            <p className={`${styles.archived} ${styles.blogStatus}`}>
              {status}
            </p>
          )}

          <button className={styles.blogButton}>View</button>
        </div>
      </div>
    </div>
  );
}
export default BlogUi;
