
import styles from './Intro.module.scss';

export default function Intro() {
    return(
        <>
            <div className={styles['intro']}>
                <h1 className={styles['titel_logo']}> MCN </h1>
                <h2 className={styles['intro__subtitel']}> Экологические </h2>
                <h2 className={styles['intro__subtitel__two']}> Инвестиции </h2>
                <p className={styles['intro__text']}>
                    ✨ Текст-заполнитель — это текст, который имеет некоторые характеристики реального письменного текста, но является случайным набором слов или сгенерирован иным образом. Его можно использовать для отображения образца шрифтов, создания текста для тестирования или обхода спам-фильтра
                </p>
            </div>
        </>
    );
}