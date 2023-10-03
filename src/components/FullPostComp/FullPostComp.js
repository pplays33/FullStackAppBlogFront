import styles from './FullPostComp.module.scss';
import ReactMarkdown from 'react-markdown';

export default function FullPostComp( {
    id,
    titel,
    text,
    viewCount,
    imageUrl,
    }) {

    console.log(`id: ${imageUrl}`);
    return(
        <>
            <div className={styles['container_fullPost']} >
                <div className={styles['fullPost']} >
                    {imageUrl && (<img src={imageUrl} alt='post_img' className={styles['img_post']}/> )}
                    <h2 className={styles['fullPost_titel']}> {titel} </h2>
                    <ReactMarkdown className={styles['fullPost_text']} children={text} />
                    {/* <p className={styles['fullPost_text']}> {text} </p> */}
                </div>
            </div>
        </>
    );
}