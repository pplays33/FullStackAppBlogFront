import styles from './Aside.module.scss';


export function RightAside() {
    return(
        <>
            <aside className={styles['RightAside']}>
                <div className={styles['container_RightAside']} >
                    <ul className={styles['menu']} >
                        <li className={styles['item', 'avatar']} > 👩‍🦰 </li>
                        <li className={styles['item']} > Link profile </li>
                        <li className={styles['item']} > Img </li>
                        <li className={styles['item']} > All posts </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}


export function Aside() {
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