import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from "react-router-dom";
import axios from "../../axios";
import ListPosts from "../../components/ListPosts/ListPosts";

export default function MyPosts(){
    const navigate = useNavigate();
    const infoMe = useSelector((state => state.auth.item));
    const [myPosts, setMyPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`/postsMy`)
            .then(
                (res) => {
                    setMyPosts(res.data);
                    setIsLoading(false);
                    // console.log(infoMe);
                }
            )
            .catch((err) => {
                setIsLoading(true);
                console.warn(err);
                alert('получите статии после авторизации!');
            });
    }, [])

    if (!infoMe) {
        return <Navigate to="/login" />;
    }

    return(<>
            <ListPosts posts={ isLoading ? [1, 2, 3, 4, 5] : myPosts } isloading={isLoading} isAutor={infoMe._id} />
    </>);
}