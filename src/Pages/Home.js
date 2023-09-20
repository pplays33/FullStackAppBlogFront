import Intro from "../components/Intro/Intro";
import PopPost from "../components/PopPost/PopPost";
import ListPosts from "../components/ListPosts/ListPosts";
import '../App.scss';

import { useDispatch, useSelector } from "react-redux";
import { feathPosts } from "../redux/slices/posts";
import { useEffect } from "react";
// import axios from '../axios';

export default function Home() {
    const dispatch = useDispatch();
    const { posts, tags } = useSelector( state => state.posts ); 

    const isPostsLoading = posts.status !== "loaded";

    useEffect(() => {
        dispatch(feathPosts());
        
    }, []);

    // console.log(isPostsLoading);
    return(
        <>
            <div className='container'>
                <Intro />
                <PopPost />
                <ListPosts posts={ isPostsLoading ? [1, 2, 3] : posts.items } isloading={isPostsLoading}/>
            </div>
        </>
    );
}