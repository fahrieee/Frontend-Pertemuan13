import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Movies from "../../components/Movies/Movies";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import ENDPOINTS from "../../utils/constants/endpoints";

function Detail() {
    //simpan API_KEY, movies(state), dan id(params) ke variabel
    const [movies,setMovies] = useState([]);
    const{id} = useParams();

    useEffect(()=> {
        getRecommendationMovies();
    },[id]);

    const getRecommendationMovies = async()=> {
        const response = await axios(ENDPOINTS.RECOMMENDATIONS(id));

        setMovies(response.data.results);
    }
    return (
        <>
            <DetailMovie/>
            <Movies title = "Recomendations" movies = {movies}/>
        </>
    );
}

export default Detail;