import styles from './Aside.module.scss';

export default function Aside() {
    return(
        <>
            <aside className={styles['Aside']}>
                <div className={styles['container_Aside']} >
                    <h1> N </h1>
                    <ul className={styles['menu']} >
                        <li className={styles['item']} > 🏠 </li>
                        <li className={styles['item']} > ⭐ </li>
                        <li className={styles['item']} > 📝 </li>
                        <li className={styles['item']} > 👋 </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}