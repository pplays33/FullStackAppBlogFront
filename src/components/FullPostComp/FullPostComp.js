import styles from './FullPostComp.module.scss';


export default function FullPostComp( {
    id,
    titel,
    text,
    viewCount,
    imageUrl,
    }) {
    return(
        <>
            <div className={styles['container_fullPost']} >
                <div className={styles['fullPost']} >
                    {imageUrl && (<img src={imageUrl} alt='post_img' className={styles['img_post']}>  </img>)}
                    <h2 className={styles['fullPost_titel']}> {titel} </h2>
                    <p className={styles['fullPost_text']}> {text} </p>
                </div>
            </div>
        </>
    );
}