import styles from './CreatePost.module.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

import SimpleMDE from "react-simplemde-editor";
import 'easymde/dist/easymde.min.css';

import axios from '../../axios';
import { useState, useCallback, useMemo, useRef } from 'react';
import { useNavigate, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectorIsAuth } from '../../redux/slices/auth';
import { setEditPost } from '../../redux/slices/posts';


export default function CreatePost() {
    const navigate = useNavigate();
    const dispath = useDispatch();
    const editPost = useSelector(state => state.posts.editPost.item);
    const isAuth = useSelector(selectorIsAuth);
    const [text, setText] = useState(editPost ? editPost.text : "'напишите тут пост...'");
    const [titel, setTitle] = useState( editPost ? editPost.titel : "Заголовок");
    const [tags, setTags] = useState("тэги");
    const [imgUrl, setImgUrl] = useState("");
    const fileChangeRef = useRef(null);


    const handleChangeFile = async (event) => {
        try {
            const formData = new FormData();
            const file = event.target.files[0];
            formData.append('image', file);
            const { data } = await axios.post("/upload", formData);
            setImgUrl(data.url);
        } catch (error) {
            alert("не удалось загрузить файл!")
        }
        // console.log("event.target.files");
        // console.log(event.target.files);
    };

    const onClickRemoveImage = () => {
        setImgUrl("");
    };

    const SubmitPost = async () => {
        const tagsArr = tags.split(" ");
        try {
            console.log(editPost);
            const Post = {
                titel: titel,
                tags: tagsArr,
                text: text,
                imageUrl: imgUrl,
            }
            
            if(editPost){
                console.log('перевая точка');
                let { data: {succsec }} = await axios.patch(`/posts/${editPost.id}`, Post);
                alert(succsec ? "пост успешно обновлен" : "упс!");
                dispath(setEditPost(null));
                navigate(`/postsMy`);
                return;
            }

            console.log('вторая точка');
            const { data } = await axios.post('/posts', Post); 
            const id_post = data._id;
            console.log(data);
            navigate(`/posts/${id_post}`);

        } catch (error) {
            console.log(error);
        }

    };

    const onChange  = useCallback((text) => {
            setText(text);
        }, []
    );

    const options = useMemo(
        () => ({
            spellChecker: false,
            maxHeight: '300px',
            autofocus: true,
            placeholder: 'Введите текст...',
            status: false,
            autosave: {
                enabled: true,
                delay: 1000,
            },
        }),
        []
    );

    // if(!isAuth){
    //     return <Navigate to="/login" />;
    // }

    // console.log({value, title, tags});

    return(
        <>
        {/* className={styles.editor}  */}
            <div className={styles.editor_container}>

                <Button onClick={() => { fileChangeRef.current.click() }} variant="text" size="large">
                    Загрузить превью
                </Button>
                <input ref={fileChangeRef} type="file" onChange={handleChangeFile} hidden />

                {imgUrl && (
                    <>
                        <img className={styles.image} src={`http://localhost:4444${imgUrl}`} alt="Uploaded" />
                        <Button variant="contained" color="error" onClick={onClickRemoveImage}>
                            Удалить
                        </Button>
                    </>
                )}

                <TextField
                    classes={{ root: styles.title }}
                    variant="filled"
                    value={titel}
                    onChange={e => setTitle(e.target.value)}
                    placeholder= "Заголовок поста..."
                    fullWidth
                />
                <TextField 
                    classes={{ root: styles.tags }}
                    variant="filled"
                    value={tags}
                    onChange={e => setTags(e.target.value)} 
                    placeholder="Тэги" 
                    fullWidth
                />

                <SimpleMDE  value={editPost ? editPost.text : text} className={styles.editor} onChange={onChange} options={options} />
                <Button size="large" variant="outlined" onClick={SubmitPost}>
                    Опубликовать
                </Button>
            </div>
            
        </>
    );
}