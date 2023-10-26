import Intro from "../components/Intro/Intro";
import PopPost from "../components/PopPost/PopPost";
import ListPosts from "../components/ListPosts/ListPosts";
import TagsList from "../components/TagsList/TagsList";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import '../App.scss';

import { useDispatch, useSelector } from "react-redux";
import { feathPosts, feathTags } from "../redux/slices/posts";
import { useEffect } from "react";
// import axios from '../axios';

export default function Home() {
    const dispatch = useDispatch();
    const { posts, tags } = useSelector( state => state.posts ); 
    
    const isPostsLoading = posts.status !== "loaded";
    const isTagsLoading = tags.status !== "loaded";

    useEffect(() => {
        dispatch(feathPosts());
        dispatch(feathTags());
    }, []);

    // console.log(isPostsLoading);
    return(
        <>
            <div className='container'>
                <Intro />
                <Paper elevation={0} />
                <PopPost />
                <TagsList tags={isTagsLoading ? [1] : tags.items } isloading={isTagsLoading} />
                <ListPosts posts={ isPostsLoading ? [1, 2, 3, 4, 5] : posts.items } isloading={isPostsLoading}/>
            </div>
        </>
    );
}