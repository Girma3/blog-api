import styles from "./uploadProfileImg.module.css";


function UploadProfileImage({onUpload}) {
 
  return (
    <div className={styles.uploadProfileImage}>
      <label htmlFor="file" aria-label="upload-image"></label>
      <input type="file" accept="image/*" id="file" name="file" onChange={onUpload} />
     
    </div>
  );
}
export default UploadProfileImage;
