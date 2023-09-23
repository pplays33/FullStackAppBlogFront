import logo from '../../logo.svg';

import styles from './PopPost.module.scss';

export default function PopPost() {
    return (
        <>
            <div className= {styles['popular__post__container']} >
                <div className={styles['content__post']} >
                    <p className={styles['content__text']} >
                        Имеет некоторые характеристики реального письменного текста, но является случайным набором слов или сгенерирован иным образом. Его можно использовать для отображения образца шрифтов, создания текста для тестирования или обхода спам-фильтра
                    </p>
                    <a href='#' className={styles['btn']} > Читать подробнее → </a>
                </div>
                <div className= {styles['img-post']} >
                    
                </div>
            </div>
        </>
    );
}