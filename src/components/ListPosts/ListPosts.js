import logo from '../../logo.svg';

import styles from './ListPosts.module.scss';

function Post({ titel, text, _id }){
    return(
        <>
            <div className={styles['post']}>
                <img src={logo} alt='post' className={styles['post_container']}></img>
                <h2 className={styles['titel_post']}> {titel} </h2>
                <p> {text} </p>
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