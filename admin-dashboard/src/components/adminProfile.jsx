import styles from "./adminProfile.module.css";

function AdminProfile({ img, name, onUpdate }) {
  return (
    <div className={styles.flexRow}>
      {img ? (
        <img className={styles.profileImage} src={img} alt="Admin Profile" />
      ) : (
        <div className={styles.placeholderImg}></div>
      )}
      <p className={styles.adminName}>{name}</p>
      <button className={styles.update} onClick={onUpdate}>
        Update
      </button>
    </div>
  );
}
export default AdminProfile;
