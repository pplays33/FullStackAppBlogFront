import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../axios";

import FullPostComp from "../components/FullPostComp/FullPostComp";


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
            <FullPostComp
                id={data._id}
                titel={data.titel}
                text={data.text}
                viewCount={data.viewCount}
                imageUrl={data.imageUrl}
            />
        </>
    );
}