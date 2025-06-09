import styles from './dataCard.module.css'
function DataCard({ title, value, icon }) {
  return (
    <div className={`${styles.dataCard} ${styles.flexColumn}`}>
      <div className={styles.icon}>{icon}</div>
      <div className={`${styles.content} ${styles.flexColumn}`}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.value}>{value}</p>
      </div>
    </div>
  );
}

export default DataCard;