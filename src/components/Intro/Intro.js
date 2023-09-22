import intro2 from './assets/intro2.jpg';
import styles from './Intro.module.scss';

export default function Intro() {
    return(
        <>
            <div className={styles['intro']}>
                <h1 className={styles['titel_logo']}> CN </h1>
                <div className={styles['container_intro']} >
                    <div className={styles['container_intro_titels']} >
                        <h2 className={styles['intro__subtitel']}> Array </h2>
                        <h2 className={styles['intro__subtitel__two']}> Documentetion. </h2>
                        <p className={styles['intro__text']}>
                            😶‍🌫️ Текст-заполнитель — это текст, который имеет некоторые характеристики реального письменного текста, но является случайным набором слов или сгенерирован иным образом. Его можно использовать для отображения образца шрифтов, создания текста для тестирования или обхода спам-фильтра
                        </p>
                    </div>
                    <div className={styles['container_intro_img']} >
                        <img src={intro2} alt="intro img" className={styles['img']} ></img>
                    </div>
                </div>


            </div>
        </>
    );
}