import styles from './ArtButton.module.scss';

export default function ArtButton(){
    return(<>
        <button
            className={styles.artButton}
            // onClick={onClick}
        >
            {/* <span className={styles.artButtonText}> читать  </span>
            <span className={styles.artButtonAngleLeft} />
            <span className={styles.artButtonAngleRight} /> */}
            Посты 🧑‍💻
        </button>
    </>);
}