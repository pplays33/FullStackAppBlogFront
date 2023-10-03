import styles from './Aside.module.scss';
import { Link } from 'react-router-dom';

import { useState } from 'react';

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
    const FERST_BTN_ACTIVE = 1;
    const TWO_BTN_ACTIVE = 2;
    const THREE_BTN_ACTIVE = 3;
    const FOUR_BTN_ACTIVE = 4;

    const [Curr_btn, setCurrBtn] = useState(FERST_BTN_ACTIVE);

    return(
        <>
            <aside className={styles['Aside']}>
                <div className={styles['container_Aside']} >
                    <h1> N </h1>
                    <ul className={styles['menu']} >
                        <li className={Curr_btn === FERST_BTN_ACTIVE ? styles.item_active : styles.item}>
                             <Link to='/' onClick={() => {setCurrBtn(FERST_BTN_ACTIVE)}}> 🏠 </Link>
                        </li>
                        <li className={styles['item']} > ⭐ </li>
                        <li className={Curr_btn === THREE_BTN_ACTIVE ? styles.item_active : styles.item} >
                             <Link to='/createPost' onClick={() => {setCurrBtn(THREE_BTN_ACTIVE)}}> 📝 </Link>
                        </li>
                        <li className={styles['item']} > 👋 </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}