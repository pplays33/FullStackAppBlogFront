import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

import styles from './ListPosts.module.scss';

function Post({ titel, text, id }){
    return(
        <>
            <div className={styles['post']}>
                <div className={styles['likes_img_container']}>
                    <div className={styles['likes_img']}>
                        <img src={logo} alt='likes_img' className={styles['likes_img_logo']}></img>
                    </div>
                    <div className={styles['likes_img']}>
                        <img src={logo} alt='likes_img' className={styles['likes_img_logo']}></img>
                        {/* <p>123</p> */}
                    </div>
                </div>
                <img src={logo} alt='post' className={styles['post_container']}></img>
                <h2 className={styles['titel_post']}> <Link to={`/posts/${id}`} className={styles['link']}>{titel}</Link> </h2>
                <p className={styles['text_post']}> {text} </p>
            </div>
        </>
    );
} 

export default function ListPosts({ posts, isloading }) {
    return (
        <>
            <div className={styles['list-posts']}>
                {
                    posts.map((item, index) => 
                        isloading ? (
                            <Post
                                key={index}
                                titel={"Загрузка"}
                                text={"Загрузка"}
                            />
                        ) : (
                            <Post
                                key={item._id}
                                id={item._id}
                                titel={item.titel}
                                text={item.text}
                            />
                        ),

                    )
                }
            </div>

        </>
    );
}