import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import Button from '@mui/material/Button';

import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setEditPost } from '../../redux/slices/posts';

import styles from './ListPosts.module.scss';


function Post({ titel, text, id, isEdit }){
    const dispath = useDispatch();
    const navigate = useNavigate();

    const onClick = () => {
        dispath(setEditPost({titel, text, id}))
        navigate(`/createPost`);
    }   

    return(
        <>
            <div className={styles['post']}>
                <img src={logo} alt='post' className={styles['post_container']}></img>
                <div className={styles['post_data']} >
                    
                    <h2 className={styles['titel_post']}> <Link to={`/posts/${id}`} className={styles['link']}>{titel}</Link> </h2>
                    <p className={styles['text_post']}> {text} </p>
                    
                </div>
                { isEdit ? 
                    (<Button variant="outlined" className={styles['edit']} onClick={onClick}> Редоктировать </Button>) : ""}
                
            </div>
        </>
    );
} 


export default function ListPosts({ posts, isloading, isAutor }) {
    return (
        <>
            <div className={styles['list-posts']}>
                <h2> Posts → </h2>
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
                                isEdit={isAutor}
                            />
                        ),

                    )
                }
            </div>

        </>
    );
}