import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../axios";

import FullPostComp from "../components/FullPostComp/FullPostComp";
import TagsList from "../components/TagsList/TagsList";

export default function FullPost(){
    const [data, setData] = useState();
    const [isloading, setIsLoading] = useState(true);

    const { id } = useParams();

    useState(() => {
        axios.get(`/posts/${id}`)
            .then(
                (res) => {
                    setData(res.data);
                    setIsLoading(false);
                    console.log(res.data);
                }
            )
            .catch((err) => {
                setIsLoading(true);
                console.warn(err);
                alert('ошибка получения статьи!');
            });
    }, []);

    if(isloading){
        return (<FullPostComp text={"Загрузка"} titel={"Загрузка"}  />);
    }

    return(
        <>
            <TagsList tags={data.tags}/>
            <FullPostComp
                id={data._id}
                titel={data.titel}
                text={data.text}
                viewCount={data.viewCount}
                imageUrl={data.imageUrl ? `http://localhost:4444${data.imageUrl}` :  ''}
            />
        </>
    );
}